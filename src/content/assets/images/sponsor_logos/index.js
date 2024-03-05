//Past Sponsors - not displayed on website
// import RapidHarness from './RapidHarness.png'
// import Altair from './Altair.png'
// import NordLock from './NordLock.png'
// import BayArea from './BayArea.png'
// import Pellucere from './Pellucere.png'
// import Dropdown from "./react-bootstrap/Dropdown";

//Car 2 Sponsor Logos
// import Eaton from './Eaton.png'
// import HWCE from './HWCE.png'
// import Siemens from './Siemens.png'
// import SolarImpact from './SolarImpact.png'
// import SunPower from './SunPower.png'
// import Universal from './Universal.png'
// import IPPD from './IPPD.png'
// import Rohacell from './Rohacell.png'
// import Brembo from './Brembo.png'
// import UFSG from './UFSG.png'
// import Accurate from './Accurate.png'
// import Zevia from './Zevia.png'
// import Stickermule from './StickerMule.png'
// import SolarCat from './SolarCat.png'
// import Kevins from './Kevins.png'
// import Hakko from './Hakko.png'
// import MossSolar from './MossSolar.png'
// import BeadBuster from './BeadBuster.png'

//Car 2 Sponsors
// var platinum2 = [Solidworks, Eaton, Altair, ECE, HWCE, Siemens, SolarImpact, SunPower, MAE, Universal];
// var silver2 = [BayArea, IPPD, Rohacell, Mirage, FGCI, UFSG, Brembo, Accurate];
// var bronze2 = [TDK, Zevia, Stickermule, SolarCat, Kevins, MossSolar, BMRS, BeadBuster, Hakko];

//Car 3 Sponsor Logos:
//Platinum
import MAE from './MAE.png'
import ZenithTecnica from './ZenithTecnica.png'
import ECE from './ECE.png'
//Gold
import MatrixComposities from './Matrix.png'
import ElektroAutomatik from './ElektroAutomatik.png'
import WestSystems from './WestSystem.png'
import Bridgestone from './Bridgestone.png'
import Solidworks from './SolidWorks.png'
//Silver
import Mirage from './Mirage.png'
import RapidCut from './RapidCut.png'
import BMRS from './Bmrs.png'
import Molex from './Molex.png'
import TDK from './TDK.png'
import Cytec from './CytecSolvay.png'
import Signarama from './Signarama.webp'
import Mathworks from './Mathworks.webp'
import Lowes from './Lowes.png'
//Bronze
import MerritSupply from './MerritSupply.png'
import SKF from './SKF.png'
import _3A from './3A.png'
import FGCI from './FGCI.png'
import PhoenixThermalSupply from './PhoenixThermal.png'
import Ansys from './Ansys.png'
import VR3 from './VR3.png'
import FusionFilaments from './FusionFilaments.png'
import IC3D from './IC3D.png'
import ProtoPasta from './Protopasta.webp'
import SainSmart from './SainSmart.webp'
import IPF from './IPF.png'
import Spirpol from './Spirol.png'
import CustomDynamics from './CustomDynamics.png'
import ExtremeCanopy from './ExtremeCanopy.png'

//Car 3 Sponsors - Sorted by tier in 2D array: [logo, website link]
let platinum3 = [[MAE, "https://mae.ufl.edu/"], [ZenithTecnica, "https://www.zenithtecnica.com/"], [ECE, "https://www.ece.ufl.edu/"]];
let gold3 = [[MatrixComposities, "https://matrixcomp.com"], [ElektroAutomatik, "https://elektroautomatik.com/"], [Molex, "https://www.molex.com"],
    [Solidworks, "https://www.solidworks.com/"], [Bridgestone, "https://www.bridgestoneamericas.com/en/index"]];
let silver3 = [[Mirage, "https://www.mirage-mfg.com/"], [RapidCut, "https://www.rapidcut.com/"], [BMRS, "https://www.bmrswired.com/"],
    [Cytec, "https://www.solvay.com/en/"], [TDK, "https://www.tdk-lambda.com"], [SKF, "https://www.skf.com"],
    [Signarama, "https://signarama.com/"], [Mathworks, "https://www.mathworks.com/"], [Lowes, "https://www.lowes.com/"]];
let bronze3 = [[MerritSupply, "https://www.merrittsupply.com/"], [WestSystems, "https://www.westsystem.com/"],
    [_3A, "https://3acompositesusa.com/"],[FGCI, "https://www.fgci.com/"],
    [PhoenixThermalSupply, "https://www.phoenixthermalsupply.com/"], [Ansys, "https://www.ansys.com/"], [VR3, "https://vr3.ca/"],
    [FusionFilaments, "https://fusionfilaments.com/"], [IC3D, "https://www.ic3dprinters.com/"], [ProtoPasta, "https://www.proto-pasta.com/"],
    [SainSmart, "https://www.sainsmart.com/"], [IPF, "https://goo.gl/maps/a8tBJe2cCBKJWkzq5"], [Spirpol, "https://www.spirol.com/"],
    [CustomDynamics, "https://www.customdynamics.com/"], [ExtremeCanopy, "https://www.extremecanopy.com/"]];

let platinum4 = [];
let gold4 = [];
let silver4 = [];
let bronze4 = [];

// GET FUNCTIONS -----------------------------
export const get_platinum_sponsors = (carNum) => {
    if (carNum === "3") { return platinum3; }
    else if (carNum === "4") { return platinum4; }
    else { return ""; }
}

export const get_gold_sponsors = (carNum) => {
    if (carNum === "3") { return gold3; }
    else if (carNum === "4") { return gold4; }
    else { return ""; }
}

export const get_silver_sponsors = (carNum) => {
    if (carNum === "3") { return silver3; }
    else if (carNum === "4") { return silver4; }
    else { return ""; }
}

export const get_bronze_sponsors = (carNum) => {
    if (carNum === "3") { return bronze3; }
    else if (carNum === "4") { return bronze4; }
    else { return ""; }
}