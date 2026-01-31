class SemiGauge {
  constructor({
    mountId, title="Gauge", unit="", min=0, max=100,
    majorStep=20, minorStep=10, warnAt=null, dangerAt=null
  }){
    this.mount = document.getElementById(mountId);
    this.unit = unit; this.min=min; this.max=max;
    this.warnAt = warnAt; this.dangerAt = dangerAt;
    this._buildDOM(title);
    this._buildTicks(majorStep, minorStep);
    this._applyZones();
  }

  // ----- DOM -----
  _buildDOM(title){
    this.mount.innerHTML = `
      <div class="title">${title}</div>
      <div class="gauge" id="${this.mount.id}-g">
        <div class="track"></div>
        <div class="zones"></div>
        <div class="ticks"></div>
        <div class="needle"></div>
        <div class="hub"></div>
      </div>
      <div class="readout">
        <span class="value" id="${this.mount.id}-val">0</span>
        <span class="unit">${this.unit}</span>
      </div>
    `;
    this.gaugeEl = this.mount.querySelector(".gauge");
    this.ticksEl = this.mount.querySelector(".ticks");
    this.needleEl = this.mount.querySelector(".needle");
    this.valueEl  = this.mount.querySelector(`#${this.mount.id}-val`);
  }

  _buildTicks(majorStep, minorStep){
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const mkTick = (value, isMajor)=>{
      const ang = this._valueToAngle(value);
      const t = document.createElement("div");
      t.className = "tick" + (isMajor ? " major" : "");
      t.style.transform = `rotate(${ang}deg)`;
      if(isMajor){
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = value;
        // keep labels upright (counter-rotate)
        label.style.setProperty("--label-rot", `${-ang}deg`);
        t.appendChild(label);
      }
      return t;
    };
    // Clear and populate
    this.ticksEl.innerHTML = "";
    // Minor ticks
    for(let v=this.min; v<=this.max; v+=minorStep){
      const isMajor = (v - this.min) % majorStep === 0;
      this.ticksEl.appendChild(mkTick(clamp(v, this.min, this.max), isMajor));
    }
  }

  _applyZones(){
    // compute fractional positions (0..1) for CSS conic gradient
    const zones = this.gaugeEl.querySelector(".zones");
    const norm = v => (v - this.min) / (this.max - this.min);
    const wp = (this.warnAt==null) ? 1 : Math.max(0, Math.min(1, norm(this.warnAt)));
    const dp = (this.dangerAt==null) ? 1 : Math.max(0, Math.min(1, norm(this.dangerAt)));
    zones.style.setProperty("--warnPos", wp);
    zones.style.setProperty("--dangerPos", Math.max(dp, wp));
  }

  // ----- Mapping & Update -----
  _valueToAngle(v){
    const p = (v - this.min) / (this.max - this.min);
    const clamped = Math.max(0, Math.min(1, p));
    return -90 + clamped * 180; // -90° (left) → +90° (right)
  }

  update(value){
    // clamp
    const v = Math.max(this.min, Math.min(this.max, value));
    // angle
    const ang = this._valueToAngle(v);
    this.needleEl.style.transform = `rotate(${ang}deg)`;
    this.valueEl.textContent = Number.isFinite(v) ? (Math.round(v*10)/10) : "—";

    // state class
    const pct = (v - this.min) / (this.max - this.min);
    this.gaugeEl.classList.remove("ok","warn","danger");
    if(this.dangerAt!=null && v >= this.dangerAt) this.gaugeEl.classList.add("danger");
    else if(this.warnAt!=null && v >= this.warnAt) this.gaugeEl.classList.add("warn");
    else this.gaugeEl.classList.add("ok");
  }
}

/* ---------- OPTIONAL: Firebase hookup example ----------
const firebaseConfig = { ... };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const tempRef = db.ref("sensors/temperature");
tempRef.on("value", s => {
  const val = s.val();
  temp.update(Number(val));
});
--------------------------------------------------------- */
