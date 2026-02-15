.pragma library

var settingsIndex = [
    // =====================================================
    // GENERAL OPTIONS
    // =====================================================
    { label: "UI Zoom", keywords: ["zoom", "ui", "scale", "size", "tiles", "display"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Player Weight", keywords: ["weight", "kg", "lbs", "body", "player"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Player Height", keywords: ["height", "cm", "tall", "player"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Player Age", keywords: ["age", "years", "old", "player"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Gender", keywords: ["gender", "male", "female", "sex"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "FTP value", keywords: ["ftp", "threshold", "power", "functional"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Critical Power Run value", keywords: ["critical", "power", "run", "running", "cp"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Nickname", keywords: ["nickname", "name", "user", "display"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Email", keywords: ["email", "mail", "address", "user"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Use Miles unit in UI", keywords: ["miles", "km", "unit", "imperial", "metric", "distance"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Use kg for weight", keywords: ["kg", "kilogram", "weight", "unit", "lbs", "pounds"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Pause when App Starts", keywords: ["pause", "start", "startup", "begin", "app"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },
    { label: "Continuous Moving", keywords: ["continuous", "moving", "motion", "always"], category: "General Options", accordionIds: ["generalOptionsAccordion"] },

    // =====================================================
    // HEART RATE OPTIONS
    // =====================================================
    { label: "Heart Rate service outside FTMS", keywords: ["heart", "rate", "service", "ftms", "bluetooth", "ble"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },
    { label: "Disable HRM from Machinery", keywords: ["disable", "hrm", "heart", "rate", "machinery", "builtin", "built-in"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },
    { label: "Disable KCal from Machinery", keywords: ["disable", "kcal", "calories", "machinery", "builtin", "built-in"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },
    { label: "Calculate Active Calories Only", keywords: ["active", "calories", "kcal", "calculate", "resting"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },
    { label: "Calculate Calories from Heart Rate", keywords: ["calories", "heart", "rate", "calculate", "kcal", "hr"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },
    { label: "Heart Belt Name", keywords: ["heart", "belt", "name", "sensor", "strap", "hrm", "bluetooth"], category: "Heart Rate Options", accordionIds: ["heartRateOptionsAccordion"] },

    // Heart Rate Options > Heart Rate Zone Options
    { label: "Zone 1 %", keywords: ["zone", "heart", "rate", "zone1", "percentage", "hr"], category: "Heart Rate Options > HR Zones", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion"] },
    { label: "Zone 2 %", keywords: ["zone", "heart", "rate", "zone2", "percentage", "hr"], category: "Heart Rate Options > HR Zones", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion"] },
    { label: "Zone 3 %", keywords: ["zone", "heart", "rate", "zone3", "percentage", "hr"], category: "Heart Rate Options > HR Zones", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion"] },
    { label: "Zone 4 %", keywords: ["zone", "heart", "rate", "zone4", "percentage", "hr"], category: "Heart Rate Options > HR Zones", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion"] },

    // Heart Rate Options > HR Zones > Heart Rate Max Override
    { label: "Override Heart Rate Max Calc.", keywords: ["override", "heart", "rate", "max", "maximum", "calculate"], category: "Heart Rate > HR Zones > Max Override", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "heartRatemaxOverrideAccordion"] },
    { label: "Max Heart Rate", keywords: ["max", "maximum", "heart", "rate", "hr", "bpm"], category: "Heart Rate > HR Zones > Max Override", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "heartRatemaxOverrideAccordion"] },
    { label: "Resting Heart Rate", keywords: ["resting", "heart", "rate", "hr", "rest", "bpm"], category: "Heart Rate > HR Zones > Max Override", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "heartRatemaxOverrideAccordion"] },

    // Heart Rate Options > HR Zones > Power from Heart Rate
    { label: "Session 1 Watt", keywords: ["session", "watt", "power", "heart", "rate", "calibration"], category: "Heart Rate > HR Zones > Power from HR", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "powerFromHeartRateAccordion"] },
    { label: "Session 1 HR", keywords: ["session", "hr", "heart", "rate", "calibration"], category: "Heart Rate > HR Zones > Power from HR", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "powerFromHeartRateAccordion"] },
    { label: "Session 2 Watt", keywords: ["session", "watt", "power", "heart", "rate", "calibration"], category: "Heart Rate > HR Zones > Power from HR", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "powerFromHeartRateAccordion"] },
    { label: "Session 2 HR", keywords: ["session", "hr", "heart", "rate", "calibration"], category: "Heart Rate > HR Zones > Power from HR", accordionIds: ["heartRateOptionsAccordion", "heartRateZoneAccordion", "powerFromHeartRateAccordion"] },

    // =====================================================
    // BIKE OPTIONS
    // =====================================================
    { label: "Speed calculates on Power", keywords: ["speed", "power", "cadence", "watts", "calculate", "rpm"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Restore Gears on Startup", keywords: ["restore", "gears", "startup", "remember", "save"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Restore Specific Gear Value", keywords: ["restore", "gear", "specific", "value", "startup"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Gear Value", keywords: ["gear", "value", "specific", "number"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Rolling Resistance Factor", keywords: ["rolling", "resistance", "factor", "crr", "clincher", "tubular", "mtb"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Bike Weight (kg)", keywords: ["bike", "weight", "kg", "lbs", "bicycle"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Rolling Res. Gain", keywords: ["rolling", "resistance", "gain", "crr"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Wind Res. Gain", keywords: ["wind", "resistance", "gain", "air", "drag"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift Workout/Erg Mode", keywords: ["zwift", "erg", "workout", "mode", "ergometer", "resistance"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift Resistance Offset", keywords: ["zwift", "resistance", "offset", "flat", "road", "level"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift Power Offset (W)", keywords: ["zwift", "power", "offset", "watts", "watt"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift Resistance Gain", keywords: ["zwift", "resistance", "gain", "scale", "factor"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift ERG Watt Up Filter", keywords: ["zwift", "erg", "watt", "filter", "up", "margin"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Zwift ERG Watt Down Filter", keywords: ["zwift", "erg", "watt", "filter", "down", "margin"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Min. Resistance", keywords: ["min", "minimum", "resistance", "limit"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Max. Resistance", keywords: ["max", "maximum", "resistance", "limit"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Resistance at Startup", keywords: ["resistance", "startup", "start", "initial", "default"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Gears Gain", keywords: ["gears", "gain", "shifting", "gear"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Gears Offset", keywords: ["gears", "offset", "shifting", "gear"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },
    { label: "FTMS Bike", keywords: ["ftms", "bike", "selection", "bluetooth", "fitness machine"], category: "Bike Options", accordionIds: ["bikeOptionsAccordion"] },

    // Bike Options > Automatic Virtual Shifting
    { label: "Enable Automatic Virtual Shifting", keywords: ["automatic", "virtual", "shifting", "gears", "auto", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Shifting Profile", keywords: ["shifting", "profile", "cruise", "climb", "sprint"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Cruise - Gear Up Cadence (RPM)", keywords: ["cruise", "gear", "up", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Cruise - Gear Up Time (seconds)", keywords: ["cruise", "gear", "up", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Cruise - Gear Down Cadence (RPM)", keywords: ["cruise", "gear", "down", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Cruise - Gear Down Time (seconds)", keywords: ["cruise", "gear", "down", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Climb - Gear Up Cadence (RPM)", keywords: ["climb", "gear", "up", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Climb - Gear Up Time (seconds)", keywords: ["climb", "gear", "up", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Climb - Gear Down Cadence (RPM)", keywords: ["climb", "gear", "down", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Climb - Gear Down Time (seconds)", keywords: ["climb", "gear", "down", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Sprint - Gear Up Cadence (RPM)", keywords: ["sprint", "gear", "up", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Sprint - Gear Up Time (seconds)", keywords: ["sprint", "gear", "up", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Sprint - Gear Down Cadence (RPM)", keywords: ["sprint", "gear", "down", "cadence", "rpm", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },
    { label: "Sprint - Gear Down Time (seconds)", keywords: ["sprint", "gear", "down", "time", "seconds", "shift"], category: "Bike > Virtual Shifting", accordionIds: ["bikeOptionsAccordion", "automaticVirtualShiftingAccordion"] },

    // Bike Options > Schwinn Bike Options
    { label: "Schwinn - Calc. Resistance", keywords: ["schwinn", "resistance", "calculate", "bike"], category: "Bike > Schwinn", accordionIds: ["bikeOptionsAccordion", "schwinnBikeAccordion"] },
    { label: "Schwinn - Res. Alternative Calc. v2", keywords: ["schwinn", "resistance", "alternative", "v2", "bike"], category: "Bike > Schwinn", accordionIds: ["bikeOptionsAccordion", "schwinnBikeAccordion"] },
    { label: "Schwinn - Res. Alternative Calc. v3", keywords: ["schwinn", "resistance", "alternative", "v3", "bike"], category: "Bike > Schwinn", accordionIds: ["bikeOptionsAccordion", "schwinnBikeAccordion"] },
    { label: "Schwinn - Resistance Smoothing", keywords: ["schwinn", "resistance", "smoothing", "filter", "bike"], category: "Bike > Schwinn", accordionIds: ["bikeOptionsAccordion", "schwinnBikeAccordion"] },

    // Bike Options > Horizon Bike Options
    { label: "Horizon GR7 Cadence Multiplier", keywords: ["horizon", "gr7", "cadence", "multiplier", "bike"], category: "Bike > Horizon", accordionIds: ["bikeOptionsAccordion", "horizonBikeAccordion"] },

    // Bike Options > Echelon Bike Options
    { label: "Echelon Watt Profile", keywords: ["echelon", "watt", "profile", "power", "bike"], category: "Bike > Echelon", accordionIds: ["bikeOptionsAccordion", "echelonBikeOptionsAccordion"] },
    { label: "Echelon Resistance Gain", keywords: ["echelon", "resistance", "gain", "bike"], category: "Bike > Echelon", accordionIds: ["bikeOptionsAccordion", "echelonBikeOptionsAccordion"] },
    { label: "Echelon Resistance Offset", keywords: ["echelon", "resistance", "offset", "bike"], category: "Bike > Echelon", accordionIds: ["bikeOptionsAccordion", "echelonBikeOptionsAccordion"] },
    { label: "Echelon Change gears using knob", keywords: ["echelon", "gears", "knob", "experimental", "bike"], category: "Bike > Echelon", accordionIds: ["bikeOptionsAccordion", "echelonBikeOptionsAccordion"] },

    // Bike Options > Inspire Bike Options
    { label: "Inspire Advanced Formula (15/3/2021)", keywords: ["inspire", "formula", "advanced", "bike", "2021"], category: "Bike > Inspire", accordionIds: ["bikeOptionsAccordion", "inspireBikeAccordion"] },
    { label: "Inspire Advanced Formula (14/7/2021)", keywords: ["inspire", "formula", "advanced", "bike", "2021"], category: "Bike > Inspire", accordionIds: ["bikeOptionsAccordion", "inspireBikeAccordion"] },

    // Bike Options > Renpho Bike Options
    { label: "Renpho New Peloton Formula", keywords: ["renpho", "peloton", "formula", "bike"], category: "Bike > Renpho", accordionIds: ["bikeOptionsAccordion", "renphoBikeAccordion"] },
    { label: "Renpho Use 0.5 resistance lvls", keywords: ["renpho", "resistance", "half", "0.5", "levels", "bike"], category: "Bike > Renpho", accordionIds: ["bikeOptionsAccordion", "renphoBikeAccordion"] },

    // Bike Options > Hammer Racer Bike Options
    { label: "Hammer Racer Bike Enable", keywords: ["hammer", "racer", "bike", "enable", "support"], category: "Bike > Hammer Racer", accordionIds: ["bikeOptionsAccordion", "hammerBikeAccordion"] },

    // Bike Options > Saris/Cycleops Hammer
    { label: "Saris/Cycleops Hammer Enable", keywords: ["saris", "cycleops", "hammer", "trainer", "enable", "support"], category: "Bike > Saris/Cycleops", accordionIds: ["bikeOptionsAccordion"] },

    // Bike Options > CardioFIT Bike Options
    { label: "CardioFIT SP-HT-9600iE", keywords: ["cardiofit", "sp-ht-9600ie", "bike"], category: "Bike > CardioFIT", accordionIds: ["bikeOptionsAccordion", "cardioFitBikeAccordion"] },

    // Bike Options > Yesoul Bike Options
    { label: "Yesoul New Peloton Formula", keywords: ["yesoul", "peloton", "formula", "bike"], category: "Bike > Yesoul", accordionIds: ["bikeOptionsAccordion", "yesoulBikeAccordion"] },

    // Bike Options > Snode Bike Options
    { label: "Snode Bike", keywords: ["snode", "bike", "enable"], category: "Bike > Snode", accordionIds: ["bikeOptionsAccordion", "snodeBikeAccordion"] },

    // Bike Options > Skandika Bike Options
    { label: "Skandika X-2000 Protocol", keywords: ["skandika", "x-2000", "protocol", "bike"], category: "Bike > Skandika", accordionIds: ["bikeOptionsAccordion", "skandikaBikeAccordion"] },

    // Bike Options > Fitplus Bike Options
    { label: "Fit Plus Bike", keywords: ["fitplus", "fit", "plus", "bike", "enable"], category: "Bike > Fitplus", accordionIds: ["bikeOptionsAccordion", "fitplusBikeAccordion"] },
    { label: "Virtufit Etappe 2.0 Bike", keywords: ["virtufit", "etappe", "bike"], category: "Bike > Fitplus", accordionIds: ["bikeOptionsAccordion", "fitplusBikeAccordion"] },
    { label: "Sportstech SX600 bike", keywords: ["sportstech", "sx600", "bike"], category: "Bike > Fitplus", accordionIds: ["bikeOptionsAccordion", "fitplusBikeAccordion"] },

    // Bike Options > Flywheel Bike Options
    { label: "Flywheel Samples Filter", keywords: ["flywheel", "samples", "filter", "bike"], category: "Bike > Flywheel", accordionIds: ["bikeOptionsAccordion", "flywheelBikeAccordion"] },
    { label: "Life Fitness IC8", keywords: ["life", "fitness", "ic8", "bike", "flywheel"], category: "Bike > Flywheel", accordionIds: ["bikeOptionsAccordion", "flywheelBikeAccordion"] },
    { label: "Life Fitness IC5", keywords: ["life", "fitness", "ic5", "bike", "flywheel"], category: "Bike > Flywheel", accordionIds: ["bikeOptionsAccordion", "flywheelBikeAccordion"] },

    // Bike Options > Domyos Bike Options
    { label: "Domyos Cadence Filter", keywords: ["domyos", "cadence", "filter", "bike"], category: "Bike > Domyos", accordionIds: ["bikeOptionsAccordion", "domyosBikeAccordion"] },
    { label: "Domyos Ignore FTMS", keywords: ["domyos", "ignore", "ftms", "bike"], category: "Bike > Domyos", accordionIds: ["bikeOptionsAccordion", "domyosBikeAccordion"] },
    { label: "Domyos Fix Calories/Km to Console", keywords: ["domyos", "fix", "calories", "km", "console", "bike"], category: "Bike > Domyos", accordionIds: ["bikeOptionsAccordion", "domyosBikeAccordion"] },
    { label: "Domyos Bike 500 wattage profile", keywords: ["domyos", "500", "wattage", "profile", "bike"], category: "Bike > Domyos", accordionIds: ["bikeOptionsAccordion", "domyosBikeAccordion"] },
    { label: "Domyos Bike 500 wattage profile v2", keywords: ["domyos", "500", "wattage", "profile", "v2", "bike"], category: "Bike > Domyos", accordionIds: ["bikeOptionsAccordion", "domyosBikeAccordion"] },

    // Bike Options > Tacx Neo Options
    { label: "Tacx Neo Peloton Configuration", keywords: ["tacx", "neo", "peloton", "configuration", "bike"], category: "Bike > Tacx Neo", accordionIds: ["bikeOptionsAccordion"] },
    { label: "Tacx Neo Disable Negative Inclination due to gear", keywords: ["tacx", "neo", "negative", "inclination", "gear", "bike"], category: "Bike > Tacx Neo", accordionIds: ["bikeOptionsAccordion"] },

    // Bike Options > Proform/Norditrack Options
    { label: "Proform Bike Wheel Ratio", keywords: ["proform", "nordictrack", "wheel", "ratio", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "Proform Bike Specific Model", keywords: ["proform", "nordictrack", "model", "specific", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "TDF CBC Jonseed watt table", keywords: ["tdf", "cbc", "jonseed", "watt", "table", "proform", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "TDF1 IP", keywords: ["tdf1", "ip", "address", "proform", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "TDF4 IP", keywords: ["tdf4", "ip", "address", "proform", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "TDF Companion IP", keywords: ["tdf", "companion", "ip", "address", "proform", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "Proform Bike ADB Remote", keywords: ["proform", "adb", "remote", "android", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },
    { label: "Proform Use Resistance instead of Inclination", keywords: ["proform", "resistance", "inclination", "bike"], category: "Bike > Proform/Nordictrack", accordionIds: ["bikeOptionsAccordion", "proformBikeAccordion"] },

    // Bike Options > Computrainer Bike Options
    { label: "Computrainer Serial Port", keywords: ["computrainer", "serial", "port", "usb", "bike"], category: "Bike > Computrainer", accordionIds: ["bikeOptionsAccordion", "computrainerBikeAccordion"] },

    // Bike Options > Kettler USB Bike Options
    { label: "Kettler USB Serial Port", keywords: ["kettler", "usb", "serial", "port", "bike"], category: "Bike > Kettler USB", accordionIds: ["bikeOptionsAccordion", "kettlerUsbBikeAccordion"] },
    { label: "Kettler USB Baudrate", keywords: ["kettler", "usb", "baudrate", "serial", "bike"], category: "Bike > Kettler USB", accordionIds: ["bikeOptionsAccordion", "kettlerUsbBikeAccordion"] },

    // Bike Options > M3i Bike Options
    { label: "M3i Use QT search on Android/iOS", keywords: ["m3i", "qt", "search", "android", "ios", "bluetooth", "bike"], category: "Bike > M3i", accordionIds: ["bikeOptionsAccordion", "m3iBikeAccordion"] },
    { label: "M3i Bike ID", keywords: ["m3i", "bike", "id", "identifier"], category: "Bike > M3i", accordionIds: ["bikeOptionsAccordion", "m3iBikeAccordion"] },
    { label: "M3i Speed Buffer Size", keywords: ["m3i", "speed", "buffer", "size", "bike"], category: "Bike > M3i", accordionIds: ["bikeOptionsAccordion", "m3iBikeAccordion"] },
    { label: "M3i Use KCal from the Bike", keywords: ["m3i", "kcal", "calories", "bike"], category: "Bike > M3i", accordionIds: ["bikeOptionsAccordion", "m3iBikeAccordion"] },

    // Bike Options > Sole Bike Options
    { label: "Sole Bike Miles unit from device", keywords: ["sole", "miles", "unit", "device", "bike"], category: "Bike > Sole", accordionIds: ["bikeOptionsAccordion", "soleBikeAccordion"] },

    // Bike Options > Technogym Bike Options
    { label: "Technogym Bike (BIKE 1, BIKE 2, etc)", keywords: ["technogym", "bike", "bike1", "bike2"], category: "Bike > Technogym", accordionIds: ["bikeOptionsAccordion", "technogymBikeAccordion"] },
    { label: "Technogym Group Cycle", keywords: ["technogym", "group", "cycle", "bike"], category: "Bike > Technogym", accordionIds: ["bikeOptionsAccordion", "technogymBikeAccordion"] },
    { label: "Technogym ANT+ Bike Device Number", keywords: ["technogym", "ant", "ant+", "device", "number", "auto", "bike"], category: "Bike > Technogym", accordionIds: ["bikeOptionsAccordion", "technogymBikeAccordion"] },

    // =====================================================
    // ANT+ OPTIONS
    // =====================================================
    { label: "Ant+ Cadence", keywords: ["ant", "ant+", "cadence", "sensor", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },
    { label: "ANT+ Speed Offset", keywords: ["ant", "ant+", "speed", "offset", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },
    { label: "ANT+ Speed Gain", keywords: ["ant", "ant+", "speed", "gain", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },
    { label: "Ant+ Heart", keywords: ["ant", "ant+", "heart", "rate", "sensor", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },
    { label: "ANT+ Heart Device Number", keywords: ["ant", "ant+", "heart", "device", "number", "auto", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },
    { label: "Ant+ Bike", keywords: ["ant", "ant+", "bike", "sensor", "garmin", "android"], category: "ANT+ Options", accordionIds: ["uiAntOptionsAccordion"] },

    // =====================================================
    // GENERAL UI OPTIONS
    // =====================================================
    { label: "Top Bar Enabled", keywords: ["top", "bar", "enabled", "toolbar", "header", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Floating Window Type", keywords: ["floating", "window", "type", "overlay", "pip", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Floating Window Width", keywords: ["floating", "window", "width", "size", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Floating Window Height", keywords: ["floating", "window", "height", "size", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Floating Window % Transparency", keywords: ["floating", "window", "transparency", "opacity", "alpha", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Floating Window Startup", keywords: ["floating", "window", "startup", "auto", "start", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },
    { label: "Chart Display Mode", keywords: ["chart", "display", "mode", "graph", "ui"], category: "General UI Options", accordionIds: ["uiGeneralOptionsAccordion"] },

    // General UI Options > UI Themes
    { label: "Tiles Icons", keywords: ["tiles", "icons", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "Background Color", keywords: ["background", "color", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "Tiles Background Color", keywords: ["tiles", "background", "color", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "Tiles Shadow", keywords: ["tiles", "shadow", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "Tiles Shadow Color", keywords: ["tiles", "shadow", "color", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "Statusbar Background Color", keywords: ["statusbar", "background", "color", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },
    { label: "2nd line tile text size", keywords: ["tile", "text", "size", "font", "second", "line", "theme", "ui"], category: "General UI > Themes", accordionIds: ["uiGeneralOptionsAccordion", "themesOptionsAccordion"] },

    // =====================================================
    // PELOTON OPTIONS
    // =====================================================
    { label: "Peloton Difficulty", keywords: ["peloton", "difficulty", "level"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Treadmill Level", keywords: ["peloton", "treadmill", "level"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Treadmill Walk Level", keywords: ["peloton", "treadmill", "walk", "level"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Walking Min Speed", keywords: ["peloton", "walking", "min", "speed"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Running Min Speed", keywords: ["peloton", "running", "min", "speed"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Rower Level", keywords: ["peloton", "rower", "level"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "PZP Username", keywords: ["pzp", "username", "peloton", "power", "zone", "pack"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "PZP Password", keywords: ["pzp", "password", "peloton", "power", "zone", "pack"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Conversion Gain", keywords: ["peloton", "conversion", "gain"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Conversion Offset", keywords: ["peloton", "conversion", "offset"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Cycling/Running Sensor (Peloton)", keywords: ["cycling", "running", "sensor", "peloton", "compatibility", "cadence"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Auto Start (with intro)", keywords: ["peloton", "auto", "start", "intro"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Auto Start (without intro)", keywords: ["peloton", "auto", "start", "without", "intro"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Override HR Metric", keywords: ["peloton", "override", "hr", "heart", "rate", "metric"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Date on Strava", keywords: ["date", "strava", "peloton"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Date Format", keywords: ["date", "format", "peloton"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Activity Link in Strava", keywords: ["activity", "link", "strava", "peloton", "description"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Spinups Autoresistance", keywords: ["spinups", "auto", "resistance", "peloton"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Auto Sync (Experimental)", keywords: ["peloton", "auto", "sync", "experimental"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },
    { label: "Peloton Auto Sync Companion", keywords: ["peloton", "auto", "sync", "companion", "experimental"], category: "Peloton Options", accordionIds: ["pelotonAccordion"] },

    // =====================================================
    // ZWIFT OPTIONS
    // =====================================================
    { label: "Zwift Username", keywords: ["zwift", "username", "login", "account"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Zwift Password", keywords: ["zwift", "password", "login", "account"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Get Gears from Zwift", keywords: ["zwift", "gears", "get", "sync", "shifting"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Align Gear Value on Both Zwift and QZ", keywords: ["zwift", "gear", "align", "sync", "qz"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Zwift Poll Time", keywords: ["zwift", "poll", "time", "interval", "refresh"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Zwift Treadmill Auto Inclination", keywords: ["zwift", "treadmill", "auto", "inclination", "incline", "grade"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Zwift Treadmill Climb Portal", keywords: ["zwift", "treadmill", "climb", "portal"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },
    { label: "Zwift Treadmill Auto Workout", keywords: ["zwift", "treadmill", "auto", "workout"], category: "Zwift Options", accordionIds: ["zwiftOptionsAccordion"] },

    // =====================================================
    // ROUVY OPTIONS
    // =====================================================
    { label: "Rouvy Compatibility", keywords: ["rouvy", "compatibility", "enable"], category: "Rouvy Options", accordionIds: ["rouvyOptionsAccordion"] },

    // =====================================================
    // GARMIN OPTIONS
    // =====================================================
    { label: "Garmin Bluetooth Sensor", keywords: ["garmin", "bluetooth", "sensor"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Garmin Enable Companion App", keywords: ["garmin", "companion", "app", "enable"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Ant+ Bike Over Garmin Watch", keywords: ["ant", "ant+", "bike", "garmin", "watch"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Enable Garmin Upload", keywords: ["garmin", "upload", "enable", "connect"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Garmin Email", keywords: ["garmin", "email", "login", "account"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Garmin Password", keywords: ["garmin", "password", "login", "account"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Garmin Server", keywords: ["garmin", "server", "connect", "international", "china"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Use Garmin device in FIT file", keywords: ["garmin", "device", "fit", "file"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },
    { label: "Garmin device for FIT file", keywords: ["garmin", "device", "fit", "file", "edge", "forerunner"], category: "Garmin Options", accordionIds: ["garminOptionsAccordion"] },

    // =====================================================
    // TRAINING PROGRAM OPTIONS
    // =====================================================
    { label: "Stop Treadmill at the End", keywords: ["stop", "treadmill", "end", "training", "program", "workout"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Auto Lap on Segment", keywords: ["auto", "lap", "segment", "training", "program"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Treadmill Auto-adjust speed by power", keywords: ["treadmill", "auto", "adjust", "speed", "power", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "PID on Heart Zone", keywords: ["pid", "heart", "zone", "control", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "PID on HR min", keywords: ["pid", "hr", "heart", "rate", "min", "minimum"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "PID on HR max", keywords: ["pid", "hr", "heart", "rate", "max", "maximum"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "PID Pushy", keywords: ["pid", "pushy", "aggressive", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "PID Ignore Inclination", keywords: ["pid", "ignore", "inclination", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "1 mile pace (total time)", keywords: ["mile", "pace", "time", "running", "1"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "5 km pace (total time)", keywords: ["5km", "pace", "time", "running", "5k"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "10 km pace (total time)", keywords: ["10km", "pace", "time", "running", "10k"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Half Marathon pace (total time)", keywords: ["half", "marathon", "pace", "time", "running", "21km"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Marathon pace (total time)", keywords: ["marathon", "pace", "time", "running", "42km"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Default Pace", keywords: ["default", "pace", "running", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "ERG Mode Watt Step", keywords: ["erg", "watt", "step", "increment", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Training Program Random", keywords: ["training", "program", "random", "auto"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Duration (minutes)", keywords: ["random", "duration", "minutes", "training", "time"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Period (seconds)", keywords: ["random", "period", "seconds", "training", "interval"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Speed min", keywords: ["random", "speed", "min", "minimum", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Speed max", keywords: ["random", "speed", "max", "maximum", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Incline min", keywords: ["random", "incline", "min", "minimum", "training", "inclination"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Incline max", keywords: ["random", "incline", "max", "maximum", "training", "inclination"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Resistance min", keywords: ["random", "resistance", "min", "minimum", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },
    { label: "Random Resistance max", keywords: ["random", "resistance", "max", "maximum", "training"], category: "Training Program Options", accordionIds: ["trainingProgramOptionsAccordion"] },

    // =====================================================
    // TREADMILL OPTIONS
    // =====================================================
    { label: "Treadmill as a Bike", keywords: ["treadmill", "bike", "convert", "mode"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Treadmill Speed Forcing", keywords: ["treadmill", "speed", "forcing", "force"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Treadmill Pause when App Starts", keywords: ["treadmill", "pause", "start", "startup"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Direct Distance from Treadmill", keywords: ["direct", "distance", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Difficulty offset based", keywords: ["difficulty", "offset", "based", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Speed Step", keywords: ["speed", "step", "increment", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Min. Inclination", keywords: ["min", "minimum", "inclination", "incline", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Max. Inclination", keywords: ["max", "maximum", "inclination", "incline", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Max. Speed", keywords: ["max", "maximum", "speed", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Min. Speed", keywords: ["min", "minimum", "speed", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "Simulate Inclination with Speed", keywords: ["simulate", "inclination", "speed", "treadmill"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },
    { label: "FTMS Treadmill Selection", keywords: ["ftms", "treadmill", "selection", "bluetooth", "fitness machine"], category: "Treadmill Options", accordionIds: ["treadmillAccordion"] },

    // Treadmill Options > Proform/Nordictrack Options
    { label: "Proform Treadmill Specific Model", keywords: ["proform", "nordictrack", "treadmill", "model", "specific"], category: "Treadmill > Proform", accordionIds: ["treadmillAccordion", "proformTreadmillAccordion"] },
    { label: "Proform Treadmill IP", keywords: ["proform", "treadmill", "ip", "address"], category: "Treadmill > Proform", accordionIds: ["treadmillAccordion", "proformTreadmillAccordion"] },
    { label: "Nordictrack 2950 IP", keywords: ["nordictrack", "2950", "ip", "address", "treadmill"], category: "Treadmill > Proform", accordionIds: ["treadmillAccordion", "proformTreadmillAccordion"] },
    { label: "Proform Treadmill ADB Remote", keywords: ["proform", "treadmill", "adb", "remote", "android"], category: "Treadmill > Proform", accordionIds: ["treadmillAccordion", "proformTreadmillAccordion"] },

    // Treadmill Options > Pafers Options
    { label: "Pafers Treadmill", keywords: ["pafers", "treadmill", "enable"], category: "Treadmill > Pafers", accordionIds: ["treadmillAccordion", "pafersTreadmillAccordion"] },
    { label: "BH IBoxster Plus", keywords: ["bh", "iboxster", "plus", "treadmill"], category: "Treadmill > Pafers", accordionIds: ["treadmillAccordion", "pafersTreadmillAccordion"] },

    // Treadmill Options > GEM Module Options
    { label: "GEM Module Inclination", keywords: ["gem", "module", "inclination", "treadmill"], category: "Treadmill > GEM Module", accordionIds: ["treadmillAccordion"] },

    // Treadmill Options > Echelon Treadmill Options
    { label: "Echelon Treadmill Miles unit from device", keywords: ["echelon", "treadmill", "miles", "unit", "device"], category: "Treadmill > Echelon", accordionIds: ["treadmillAccordion"] },

    // Treadmill Options > KingSmith Options
    { label: "WalkingPad X21", keywords: ["walkingpad", "x21", "kingsmith", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },
    { label: "WalkingPad X21 v2", keywords: ["walkingpad", "x21", "v2", "kingsmith", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },
    { label: "WalkingPad X21 v3", keywords: ["walkingpad", "x21", "v3", "kingsmith", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },
    { label: "WalkingPad X21 v4", keywords: ["walkingpad", "x21", "v4", "kingsmith", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },
    { label: "WalkingPad G1", keywords: ["walkingpad", "g1", "kingsmith", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },
    { label: "KingSmith Hardware Buttons", keywords: ["kingsmith", "hardware", "buttons", "treadmill"], category: "Treadmill > KingSmith", accordionIds: ["treadmillAccordion", "kingsmithTreadmillAccordion"] },

    // Treadmill Options > RunnerT Options
    { label: "Fitfiu MC-460", keywords: ["fitfiu", "mc-460", "treadmill", "runnert"], category: "Treadmill > RunnerT", accordionIds: ["treadmillAccordion", "runnerTTreadmillAccordion"] },
    { label: "Zero ZT-2500", keywords: ["zero", "zt-2500", "treadmill", "runnert"], category: "Treadmill > RunnerT", accordionIds: ["treadmillAccordion", "runnerTTreadmillAccordion"] },

    // Treadmill Options > Domyos Treadmill Options
    { label: "Domyos Speed/Inclination Buttons", keywords: ["domyos", "speed", "inclination", "buttons", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos T900", keywords: ["domyos", "t900", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos TS100 (Fixed 15 Inclination)", keywords: ["domyos", "ts100", "fixed", "inclination", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Sync Start (Old Behavior)", keywords: ["domyos", "sync", "start", "old", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Distance on Console", keywords: ["domyos", "distance", "console", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Fix Distance on Display", keywords: ["domyos", "fix", "distance", "display", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Remap 5 km/h button", keywords: ["domyos", "remap", "5", "kmh", "button", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Remap 10 km/h button", keywords: ["domyos", "remap", "10", "kmh", "button", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Remap 16 km/h button", keywords: ["domyos", "remap", "16", "kmh", "button", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Remap 22 km/h button", keywords: ["domyos", "remap", "22", "kmh", "button", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },
    { label: "Domyos Pool time (ms)", keywords: ["domyos", "pool", "time", "ms", "polling", "treadmill"], category: "Treadmill > Domyos", accordionIds: ["treadmillAccordion", "domyosTreadmillAccordion"] },

    // Treadmill Options > Sole Treadmill Options
    { label: "Sole Treadmill Inclination", keywords: ["sole", "inclination", "experimental", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },
    { label: "Sole Treadmill Fast Inclination", keywords: ["sole", "fast", "inclination", "experimental", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },
    { label: "Sole Treadmill Miles unit from device", keywords: ["sole", "miles", "unit", "device", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },
    { label: "Sole F63", keywords: ["sole", "f63", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },
    { label: "Sole F65", keywords: ["sole", "f65", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },
    { label: "Sole TT8", keywords: ["sole", "tt8", "treadmill"], category: "Treadmill > Sole", accordionIds: ["treadmillAccordion", "soleTreadmillAccordion"] },

    // Treadmill Options > Technogym Options
    { label: "Technogym MyRun Experimental", keywords: ["technogym", "myrun", "experimental", "treadmill"], category: "Treadmill > Technogym", accordionIds: ["treadmillAccordion", "technogymTreadmillAccordion"] },

    // Treadmill Options > Fitshow Treadmill Options
    { label: "Fitshow AnyRun", keywords: ["fitshow", "anyrun", "treadmill"], category: "Treadmill > Fitshow", accordionIds: ["treadmillAccordion", "fitshowAccordion"] },
    { label: "Fitshow Atletica Lightspeed", keywords: ["fitshow", "atletica", "lightspeed", "treadmill"], category: "Treadmill > Fitshow", accordionIds: ["treadmillAccordion", "fitshowAccordion"] },
    { label: "Fitshow True timer", keywords: ["fitshow", "true", "timer", "treadmill"], category: "Treadmill > Fitshow", accordionIds: ["treadmillAccordion", "fitshowAccordion"] },
    { label: "Fitshow Miles unit from device", keywords: ["fitshow", "miles", "unit", "device", "treadmill"], category: "Treadmill > Fitshow", accordionIds: ["treadmillAccordion", "fitshowAccordion"] },
    { label: "Fitshow User ID", keywords: ["fitshow", "user", "id", "treadmill"], category: "Treadmill > Fitshow", accordionIds: ["treadmillAccordion", "fitshowAccordion"] },

    // Treadmill Options > ESLinker Treadmill Options
    { label: "ESLinker Cadenza Treadmill (Bodytone)", keywords: ["eslinker", "cadenza", "bodytone", "treadmill"], category: "Treadmill > ESLinker", accordionIds: ["treadmillAccordion", "eslinkerTreadmillAccordion"] },
    { label: "ESLinker YPOO Mini Change", keywords: ["eslinker", "ypoo", "mini", "change", "treadmill"], category: "Treadmill > ESLinker", accordionIds: ["treadmillAccordion", "eslinkerTreadmillAccordion"] },
    { label: "ESLinker Costaway Folding", keywords: ["eslinker", "costaway", "folding", "treadmill"], category: "Treadmill > ESLinker", accordionIds: ["treadmillAccordion", "eslinkerTreadmillAccordion"] },

    // Treadmill Options > Horizon Treadmill Options
    { label: "Horizon Paragon X", keywords: ["horizon", "paragon", "x", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon Force Using FTMS", keywords: ["horizon", "force", "ftms", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon 7.8 start issue", keywords: ["horizon", "7.8", "start", "issue", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon Disable Pause", keywords: ["horizon", "disable", "pause", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon Suspend stats while paused", keywords: ["horizon", "suspend", "stats", "paused", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon User 1", keywords: ["horizon", "user", "1", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon User 2", keywords: ["horizon", "user", "2", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon User 3", keywords: ["horizon", "user", "3", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon User 4", keywords: ["horizon", "user", "4", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },
    { label: "Horizon User 5", keywords: ["horizon", "user", "5", "treadmill"], category: "Treadmill > Horizon", accordionIds: ["treadmillAccordion", "horizonTreadmillAccordion"] },

    // Treadmill Options > Bodytone Treadmill Options
    { label: "Bodytone Force Using FTMS", keywords: ["bodytone", "force", "ftms", "treadmill"], category: "Treadmill > Bodytone", accordionIds: ["treadmillAccordion"] },

    // Treadmill Options > Bowflex Treadmill Options
    { label: "Bowflex T9 mi/h speed", keywords: ["bowflex", "t9", "mph", "speed", "treadmill"], category: "Treadmill > Bowflex", accordionIds: ["treadmillAccordion", "bowflexTreadmillAccordion"] },

    // =====================================================
    // TOORX/iCONSOLE OPTIONS
    // =====================================================
    { label: "TRX ROUTE KEY Compatibility", keywords: ["trx", "route", "key", "toorx", "compatibility"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "TRX 65s EVO", keywords: ["trx", "65s", "evo", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "BH SPADA Compatibility", keywords: ["bh", "spada", "compatibility", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "BH SPADA wattage", keywords: ["bh", "spada", "wattage", "power", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx SRX 500", keywords: ["toorx", "srx", "500", "bike"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx SRX 3500", keywords: ["toorx", "srx", "3500", "bike"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Enerfit SPX 9500 / Toorx SRX 500", keywords: ["enerfit", "spx", "9500", "toorx", "srx", "500"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "HOP-Sport HS-090h", keywords: ["hop-sport", "hs-090h", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Taurua IC90 Bike", keywords: ["taurua", "ic90", "bike", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "JTX Fitness Sprint Treadmill", keywords: ["jtx", "fitness", "sprint", "treadmill", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Reebok FR30 Treadmill", keywords: ["reebok", "fr30", "treadmill", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "DKN Endurn Treadmill", keywords: ["dkn", "endurn", "treadmill", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx 3.0 Compatibility", keywords: ["toorx", "3.0", "compatibility"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx/iConsole Bike", keywords: ["toorx", "iconsole", "bike"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx FTMS Treadmill", keywords: ["toorx", "ftms", "treadmill"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "IConcept FTMS Treadmill", keywords: ["iconcept", "ftms", "treadmill", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx FTMS Bike", keywords: ["toorx", "ftms", "bike"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "JLL IC400 Bike", keywords: ["jll", "ic400", "bike", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Fytter RI08 Bike", keywords: ["fytter", "ri08", "bike", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Asviva Bike", keywords: ["asviva", "bike", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Hertz XR 770 Bike", keywords: ["hertz", "xr", "770", "bike", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "iConsole Elliptical", keywords: ["iconsole", "elliptical", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "iConsole Rower", keywords: ["iconsole", "rower", "toorx"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },
    { label: "Toorx Treadmill Discovery Completed", keywords: ["toorx", "treadmill", "discovery", "completed"], category: "Toorx/iConsole Options", accordionIds: ["toorxTreadmillAccordion"] },

    // =====================================================
    // ROWER OPTIONS
    // =====================================================
    // Rower Options > PM3, PM4 Options
    { label: "Rower PM3/PM4 Serial Port", keywords: ["rower", "pm3", "pm4", "serial", "port", "concept2"], category: "Rower > PM3/PM4", accordionIds: ["rowerOptionsAccordion"] },
    { label: "FTMS Rower Selection", keywords: ["ftms", "rower", "selection", "bluetooth"], category: "Rower > PM3/PM4", accordionIds: ["rowerOptionsAccordion"] },

    // Rower Options > Proform/Nordictrack Rower Options
    { label: "Proform Sport RL", keywords: ["proform", "sport", "rl", "rower"], category: "Rower > Proform", accordionIds: ["rowerOptionsAccordion"] },
    { label: "Proform Rower 750R", keywords: ["proform", "rower", "750r"], category: "Rower > Proform", accordionIds: ["rowerOptionsAccordion"] },
    { label: "ProForm Rower IP", keywords: ["proform", "rower", "ip", "address"], category: "Rower > Proform", accordionIds: ["rowerOptionsAccordion"] },

    // =====================================================
    // ELLIPTICAL OPTIONS
    // =====================================================
    // Elliptical Options > Domyos Elliptical Options
    { label: "Domyos Elliptical Speed Ratio", keywords: ["domyos", "elliptical", "speed", "ratio"], category: "Elliptical > Domyos", accordionIds: ["ellipticalAccordion", "domyosEllipticalAccordion"] },
    { label: "Domyos Elliptical Inclination Supported", keywords: ["domyos", "elliptical", "inclination", "supported"], category: "Elliptical > Domyos", accordionIds: ["ellipticalAccordion", "domyosEllipticalAccordion"] },

    // Elliptical Options > Life Fitness 95xi (CSAFE)
    { label: "Life Fitness 95xi Serial Port", keywords: ["life", "fitness", "95xi", "csafe", "serial", "port", "elliptical"], category: "Elliptical > Life Fitness", accordionIds: ["ellipticalAccordion"] },
    { label: "FTMS Elliptical Selection", keywords: ["ftms", "elliptical", "selection", "bluetooth"], category: "Elliptical > Life Fitness", accordionIds: ["ellipticalAccordion"] },

    // Elliptical Options > Proform/Nordictrack Elliptical Options
    { label: "Proform Hybrid Trainer XT", keywords: ["proform", "hybrid", "trainer", "xt", "elliptical"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },
    { label: "Proform Hybrid Trainer PFEL03815", keywords: ["proform", "hybrid", "trainer", "pfel03815", "elliptical"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },
    { label: "Nordictrack C7.5", keywords: ["nordictrack", "c7.5", "elliptical"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },
    { label: "NordicTrack Elliptical SE7i", keywords: ["nordictrack", "se7i", "elliptical"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },
    { label: "Proform Elliptical Companion IP", keywords: ["proform", "elliptical", "companion", "ip", "address"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },
    { label: "Proform Elliptical ADB Remote", keywords: ["proform", "elliptical", "adb", "remote", "android"], category: "Elliptical > Proform", accordionIds: ["ellipticalAccordion", "proformEllipticalAccordion"] },

    // Elliptical Options > Sole Elliptical Options
    { label: "Sole Elliptical Inclination Supported", keywords: ["sole", "elliptical", "inclination", "supported"], category: "Elliptical > Sole", accordionIds: ["ellipticalAccordion", "soleEllipticalAccordion"] },
    { label: "Sole E55 elliptical", keywords: ["sole", "e55", "elliptical"], category: "Elliptical > Sole", accordionIds: ["ellipticalAccordion", "soleEllipticalAccordion"] },

    // Elliptical Options > iConcept Elliptical Options
    { label: "iConcept elliptical", keywords: ["iconcept", "elliptical", "enable"], category: "Elliptical > iConcept", accordionIds: ["ellipticalAccordion"] },

    // =====================================================
    // ADVANCED SETTINGS
    // =====================================================
    { label: "Manual Device", keywords: ["manual", "device", "selection", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Confirm Stop Workout", keywords: ["confirm", "stop", "workout", "dialog", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Watt Offset", keywords: ["watt", "offset", "power", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Watt Gain", keywords: ["watt", "gain", "power", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Speed Offset", keywords: ["speed", "offset", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Speed Gain", keywords: ["speed", "gain", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Cadence Offset", keywords: ["cadence", "offset", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Cadence Gain", keywords: ["cadence", "gain", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Strava Upload", keywords: ["strava", "upload", "sync", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Strava Suffix activity", keywords: ["strava", "suffix", "activity", "name", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Strava External Browser Auth", keywords: ["strava", "external", "browser", "auth", "authentication", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Strava Virtual Activity Tag", keywords: ["strava", "virtual", "activity", "tag", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Strava Treadmill Tag", keywords: ["strava", "treadmill", "tag", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Date Prefix on Strava Workout", keywords: ["date", "prefix", "strava", "workout", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Volume buttons change gears", keywords: ["volume", "buttons", "gears", "shifting", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Volume buttons debouncing", keywords: ["volume", "buttons", "debouncing", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Power Averaging Mode", keywords: ["power", "averaging", "mode", "watt", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Instant Power on Pause", keywords: ["instant", "power", "pause", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Double Negative Inclination", keywords: ["double", "negative", "inclination", "x2", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Zwift Inclination Offset", keywords: ["zwift", "inclination", "offset", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Zwift Inclination Gain", keywords: ["zwift", "inclination", "gain", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Minimum Inclination", keywords: ["minimum", "inclination", "limit", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Inclination Step", keywords: ["inclination", "step", "increment", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Send real inclination to virtual bridge", keywords: ["real", "inclination", "virtual", "bridge", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Disable wattage from machinery", keywords: ["disable", "wattage", "machinery", "power", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Use Resistance instead of Inclination", keywords: ["resistance", "inclination", "use", "instead", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "AutoLap on Distance", keywords: ["autolap", "auto", "lap", "distance", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },
    { label: "Inclination Delay", keywords: ["inclination", "delay", "ms", "advanced"], category: "Advanced Settings", accordionIds: ["advancedSettingsAccordion"] },

    // =====================================================
    // ACCESSORIES
    // =====================================================
    // Accessories > Cadence Sensor Options
    { label: "Cadence Sensor as a Bike", keywords: ["cadence", "sensor", "bike", "accessories"], category: "Accessories > Cadence Sensor", accordionIds: ["accesoriesAccordion", "cadenceSensorOptionsAccordion"] },
    { label: "Cadence Sensor Selection", keywords: ["cadence", "sensor", "selection", "bluetooth", "accessories"], category: "Accessories > Cadence Sensor", accordionIds: ["accesoriesAccordion", "cadenceSensorOptionsAccordion"] },
    { label: "Cadence Sensor Wheel Ratio", keywords: ["cadence", "sensor", "wheel", "ratio", "accessories"], category: "Accessories > Cadence Sensor", accordionIds: ["accesoriesAccordion", "cadenceSensorOptionsAccordion"] },
    { label: "Rogue Echo Bike", keywords: ["rogue", "echo", "bike", "cadence", "accessories"], category: "Accessories > Cadence Sensor", accordionIds: ["accesoriesAccordion", "cadenceSensorOptionsAccordion"] },

    // Accessories > Power Sensor Options
    { label: "Power Sensor as a Bike", keywords: ["power", "sensor", "bike", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Power Sensor as a Treadmill", keywords: ["power", "sensor", "treadmill", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Doubling Cadence for Run", keywords: ["doubling", "cadence", "run", "running", "power", "sensor", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Half Cadence on Strava", keywords: ["half", "cadence", "strava", "power", "sensor", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Use speed from the power sensor", keywords: ["speed", "power", "sensor", "use", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Use inclination from the power sensor", keywords: ["inclination", "power", "sensor", "use", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Use cadence from the power sensor", keywords: ["cadence", "power", "sensor", "use", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Add inclination gain factor to power", keywords: ["inclination", "gain", "factor", "power", "sensor", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },
    { label: "Power Sensor Selection", keywords: ["power", "sensor", "selection", "bluetooth", "accessories"], category: "Accessories > Power Sensor", accordionIds: ["accesoriesAccordion", "powerSensorOptionsAccordion"] },

    // Accessories > Elite > Rizer Options
    { label: "Elite Rizer Selection", keywords: ["elite", "rizer", "selection", "bluetooth", "accessories"], category: "Accessories > Elite > Rizer", accordionIds: ["accesoriesAccordion", "eliteAccesoriesAccordion", "eliteRizerOptionsAccordion"] },
    { label: "Elite Rizer Difficulty/Gain", keywords: ["elite", "rizer", "difficulty", "gain", "accessories"], category: "Accessories > Elite > Rizer", accordionIds: ["accesoriesAccordion", "eliteAccesoriesAccordion", "eliteRizerOptionsAccordion"] },

    // Accessories > Elite > Sterzo Smart Options
    { label: "Elite Sterzo Smart Selection", keywords: ["elite", "sterzo", "smart", "selection", "bluetooth", "accessories"], category: "Accessories > Elite > Sterzo", accordionIds: ["accesoriesAccordion", "eliteAccesoriesAccordion", "eliteSterzoSmartOptionsAccordion"] },

    // Accessories > SmartSpin2k Options
    { label: "SmartSpin2k device", keywords: ["smartspin2k", "device", "selection", "bluetooth", "accessories"], category: "Accessories > SmartSpin2k", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion"] },
    { label: "SmartSpin2k Peloton Bike", keywords: ["smartspin2k", "peloton", "bike", "accessories"], category: "Accessories > SmartSpin2k", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion"] },
    { label: "SmartSpin2k Shift Step", keywords: ["smartspin2k", "shift", "step", "accessories"], category: "Accessories > SmartSpin2k", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion"] },
    { label: "SmartSpin2k Max Resistance", keywords: ["smartspin2k", "max", "resistance", "accessories"], category: "Accessories > SmartSpin2k", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion"] },
    { label: "SmartSpin2k Min Resistance", keywords: ["smartspin2k", "min", "resistance", "accessories"], category: "Accessories > SmartSpin2k", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion"] },

    // Accessories > SmartSpin2k > Advanced Calibration
    { label: "SmartSpin2k Resistance Sample 1", keywords: ["smartspin2k", "resistance", "sample", "calibration", "1"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Shift Step Sample 1", keywords: ["smartspin2k", "shift", "step", "sample", "calibration", "1"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Resistance Sample 2", keywords: ["smartspin2k", "resistance", "sample", "calibration", "2"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Shift Step Sample 2", keywords: ["smartspin2k", "shift", "step", "sample", "calibration", "2"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Resistance Sample 3", keywords: ["smartspin2k", "resistance", "sample", "calibration", "3"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Shift Step Sample 3", keywords: ["smartspin2k", "shift", "step", "sample", "calibration", "3"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Resistance Sample 4", keywords: ["smartspin2k", "resistance", "sample", "calibration", "4"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },
    { label: "SmartSpin2k Shift Step Sample 4", keywords: ["smartspin2k", "shift", "step", "sample", "calibration", "4"], category: "Accessories > SmartSpin2k > Calibration", accordionIds: ["accesoriesAccordion", "ftmsAccessoryOptionsAccordion", "ftmsAccessoryAdvancedOptionsAccordion"] },

    // Accessories > Fitmetria Fitfan Options
    { label: "Fitmetria Fitfan Enable", keywords: ["fitmetria", "fitfan", "fan", "enable", "accessories"], category: "Accessories > Fitmetria Fitfan", accordionIds: ["accesoriesAccordion", "fitmetriaFanFitOptionsAccordion"] },
    { label: "Fitmetria Fitfan Mode", keywords: ["fitmetria", "fitfan", "mode", "fan", "accessories"], category: "Accessories > Fitmetria Fitfan", accordionIds: ["accesoriesAccordion", "fitmetriaFanFitOptionsAccordion"] },
    { label: "Fitmetria Fitfan Min value", keywords: ["fitmetria", "fitfan", "min", "value", "fan", "accessories"], category: "Accessories > Fitmetria Fitfan", accordionIds: ["accesoriesAccordion", "fitmetriaFanFitOptionsAccordion"] },
    { label: "Fitmetria Fitfan Max value", keywords: ["fitmetria", "fitfan", "max", "value", "fan", "accessories"], category: "Accessories > Fitmetria Fitfan", accordionIds: ["accesoriesAccordion", "fitmetriaFanFitOptionsAccordion"] },

    // Accessories > Wahoo Kickr HeadWind Options
    { label: "Wahoo Kickr HeadWind Enable", keywords: ["wahoo", "kickr", "headwind", "fan", "enable", "accessories"], category: "Accessories > Wahoo HeadWind", accordionIds: ["accesoriesAccordion"] },
    { label: "Wahoo Kickr HeadWind Mode", keywords: ["wahoo", "kickr", "headwind", "mode", "fan", "accessories"], category: "Accessories > Wahoo HeadWind", accordionIds: ["accesoriesAccordion"] },
    { label: "Wahoo Kickr HeadWind Min value", keywords: ["wahoo", "kickr", "headwind", "min", "value", "fan", "accessories"], category: "Accessories > Wahoo HeadWind", accordionIds: ["accesoriesAccordion"] },
    { label: "Wahoo Kickr HeadWind Max value", keywords: ["wahoo", "kickr", "headwind", "max", "value", "fan", "accessories"], category: "Accessories > Wahoo HeadWind", accordionIds: ["accesoriesAccordion"] },

    // Accessories > Elite Aria Options
    { label: "Elite Aria Enable", keywords: ["elite", "aria", "fan", "enable", "accessories"], category: "Accessories > Elite Aria", accordionIds: ["accesoriesAccordion"] },
    { label: "Elite Aria Mode", keywords: ["elite", "aria", "mode", "fan", "accessories"], category: "Accessories > Elite Aria", accordionIds: ["accesoriesAccordion"] },
    { label: "Elite Aria Min value", keywords: ["elite", "aria", "min", "value", "fan", "accessories"], category: "Accessories > Elite Aria", accordionIds: ["accesoriesAccordion"] },
    { label: "Elite Aria Max value", keywords: ["elite", "aria", "max", "value", "fan", "accessories"], category: "Accessories > Elite Aria", accordionIds: ["accesoriesAccordion"] },

    // Accessories > Thinkrider Options
    { label: "Thinkrider Controller", keywords: ["thinkrider", "controller", "accessories"], category: "Accessories > Thinkrider", accordionIds: ["accesoriesAccordion"] },

    // Accessories > Zwift Devices Options
    { label: "Zwift Click", keywords: ["zwift", "click", "controller", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Zwift Play", keywords: ["zwift", "play", "controller", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Zwift Play Vibration", keywords: ["zwift", "play", "vibration", "haptic", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Zwift Devices Buttons debouncing", keywords: ["zwift", "devices", "buttons", "debouncing", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Zwift Devices Swap sides", keywords: ["zwift", "devices", "swap", "sides", "left", "right", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Use Zwift app ratio for gears", keywords: ["zwift", "app", "ratio", "gears", "experimental", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },
    { label: "Zwift Devices Pool time (ms)", keywords: ["zwift", "devices", "pool", "time", "polling", "accessories"], category: "Accessories > Zwift Devices", accordionIds: ["accesoriesAccordion"] },

    // =====================================================
    // MAPS
    // =====================================================
    { label: "Maps Type", keywords: ["maps", "type", "google", "osm", "openstreetmap"], category: "Maps", accordionIds: ["mapsAccordion"] },
    { label: "Maps Loop Start-End-Start", keywords: ["maps", "loop", "start", "end", "route"], category: "Maps", accordionIds: ["mapsAccordion"] },

    // =====================================================
    // EXPERIMENTAL FEATURES
    // =====================================================
    { label: "Relaxed Bluetooth for mad devices", keywords: ["relaxed", "bluetooth", "mad", "devices", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Bluetooth hangs after 30 m", keywords: ["bluetooth", "hangs", "30", "minutes", "disconnect", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Simulate Battery Service", keywords: ["simulate", "battery", "service", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Enable Virtual Device", keywords: ["virtual", "device", "enable", "bluetooth", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Race Mode", keywords: ["race", "mode", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Run Cadence Sensor", keywords: ["run", "cadence", "sensor", "running", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Android WakeLock", keywords: ["android", "wakelock", "screen", "awake", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "iOS Peloton Workaround", keywords: ["ios", "peloton", "workaround", "apple", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "iOS Bluetooth Device Native", keywords: ["ios", "bluetooth", "device", "native", "apple", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Fake Device", keywords: ["fake", "device", "test", "debug", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Fake Treadmill", keywords: ["fake", "treadmill", "test", "debug", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Fake Elliptical", keywords: ["fake", "elliptical", "test", "debug", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Fake Rower", keywords: ["fake", "rower", "test", "debug", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "iOS Heart Caching", keywords: ["ios", "heart", "caching", "apple", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Android Notification", keywords: ["android", "notification", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Android Force Documents/QZ Folder", keywords: ["android", "force", "documents", "qz", "folder", "storage", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },
    { label: "Debug Log", keywords: ["debug", "log", "logging", "verbose", "experimental"], category: "Experimental Features", accordionIds: ["experimentalFeatureAccordion"] },

    // Experimental Features > Virtual Device Bluetooth
    { label: "Virtual Heart Only", keywords: ["virtual", "heart", "only", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Virtual Echelon", keywords: ["virtual", "echelon", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Virtual Rower", keywords: ["virtual", "rower", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Virtual Rower as PM5", keywords: ["virtual", "rower", "pm5", "concept2", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Force Virtual Treadmill", keywords: ["force", "virtual", "treadmill", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Zwift Force Resistance", keywords: ["zwift", "force", "resistance", "virtual", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Bike Power Sensor (Virtual)", keywords: ["bike", "power", "sensor", "virtual", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },
    { label: "Virtual iFit", keywords: ["virtual", "ifit", "bluetooth", "experimental"], category: "Experimental > Virtual Device BT", accordionIds: ["experimentalFeatureAccordion", "virtualBeviceBluetoothAccordion"] },

    // Experimental Features > DIRCON (Wahoo direct connect)
    { label: "DIRCON MyWhoosh Compatibility", keywords: ["dircon", "mywhoosh", "compatibility", "wahoo", "experimental"], category: "Experimental > DIRCON", accordionIds: ["experimentalFeatureAccordion", "dirconAccordion"] },
    { label: "DIRCON ID", keywords: ["dircon", "id", "wahoo", "direct", "connect", "experimental"], category: "Experimental > DIRCON", accordionIds: ["experimentalFeatureAccordion", "dirconAccordion"] },
    { label: "DIRCON Server Port", keywords: ["dircon", "server", "port", "wahoo", "direct", "connect", "experimental"], category: "Experimental > DIRCON", accordionIds: ["experimentalFeatureAccordion", "dirconAccordion"] },

    // Experimental Features > MQTT Settings
    { label: "MQTT Host", keywords: ["mqtt", "host", "server", "broker", "iot", "experimental"], category: "Experimental > MQTT", accordionIds: ["experimentalFeatureAccordion", "mqttAccordion"] },
    { label: "MQTT Port", keywords: ["mqtt", "port", "server", "broker", "experimental"], category: "Experimental > MQTT", accordionIds: ["experimentalFeatureAccordion", "mqttAccordion"] },
    { label: "MQTT Username", keywords: ["mqtt", "username", "login", "experimental"], category: "Experimental > MQTT", accordionIds: ["experimentalFeatureAccordion", "mqttAccordion"] },
    { label: "MQTT Password", keywords: ["mqtt", "password", "login", "experimental"], category: "Experimental > MQTT", accordionIds: ["experimentalFeatureAccordion", "mqttAccordion"] },
    { label: "MQTT Device ID", keywords: ["mqtt", "device", "id", "experimental"], category: "Experimental > MQTT", accordionIds: ["experimentalFeatureAccordion", "mqttAccordion"] },

    // Experimental Features > OSC Settings
    { label: "OSC IP", keywords: ["osc", "ip", "address", "open", "sound", "control", "experimental"], category: "Experimental > OSC", accordionIds: ["experimentalFeatureAccordion", "oscAccordion"] },
    { label: "OSC Port", keywords: ["osc", "port", "open", "sound", "control", "experimental"], category: "Experimental > OSC", accordionIds: ["experimentalFeatureAccordion", "oscAccordion"] }
];

// Search function: returns matching entries for a given query
function search(query) {
    if (!query || query.length < 2) return [];
    var terms = query.toLowerCase().split(/\s+/);
    var results = [];
    for (var i = 0; i < settingsIndex.length; i++) {
        var entry = settingsIndex[i];
        var match = true;
        for (var t = 0; t < terms.length; t++) {
            var term = terms[t];
            var termMatch = false;
            // Check label
            if (entry.label.toLowerCase().indexOf(term) >= 0) {
                termMatch = true;
            }
            // Check keywords
            if (!termMatch) {
                for (var k = 0; k < entry.keywords.length; k++) {
                    if (entry.keywords[k].indexOf(term) >= 0) {
                        termMatch = true;
                        break;
                    }
                }
            }
            // Check category
            if (!termMatch) {
                if (entry.category.toLowerCase().indexOf(term) >= 0) {
                    termMatch = true;
                }
            }
            if (!termMatch) {
                match = false;
                break;
            }
        }
        if (match) {
            results.push(entry);
        }
        // Limit results to 20 for performance
        if (results.length >= 20) break;
    }
    return results;
}
