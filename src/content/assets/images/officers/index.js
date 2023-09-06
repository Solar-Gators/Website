// OFFICER PICTURES -----------------------------
// 2023-24
import { president23, vicepresident23, treasurer23, secretary23, business23, staticPM23, dynamicPM23, electricalPM23,
        integrationPM230, integrationPM231, integrationPM232, aerobody23, batterypack23, brakes23, chassis23, telemetry23,
        suspension23, lowvoltage23} from './2023/index'

// 2022-23
import {president22, vicepresident22, treasurer22, secretary22, business22, electricalPM22, integrationPM22, mechanicalPM22,
        aerobody22, brakes22, batterypack22, suspension22, chassis22, embeddedsystems22, highvoltage22,
        lowvoltage22, powermanagement22 } from './2022/index'
// 2021-22
import {president21, vicepresident21, treasurer21, secretary21, business21, aerobody21, solararray21, auxiliary21,
bms21, motorcontroller21, powerboard21, telemetry21, battery21, brakes21, chassis21, suspension21, aeroPM21} from './2021/index'
// 2020-21
import {president20, vicepresident20, treasurer20, secretary20, business20} from "./2020/index";
// 2019-20 Officers Pictures
import {president19, vicepresident19, treasurer19, secretary19, business19} from './2019/index';



// OFFICER LISTS -----------------------------
//2023-24: (Names, Positions, Headshot)
let executive_board23 = [["Irene Chung", "President", president23],
    ["Remington Ewing", "Vice President", vicepresident23],
    ["Martin Lu", "Treasurer", treasurer23],
    ["Isabella Lucarelli", "Secretary", secretary23],
    ["Ruben Gonzalez Vera", "Business Coordinator", business23]];
let pms23 = [["Matthew Shen", "Electrical PM", electricalPM23],
    ["Lauren Shaw", "Static PM", staticPM23], ["Kurt Smith", "Dynamic PM", dynamicPM23],
    ["Samuel Breslin", "Integration PM", integrationPM230],
    ["Lacie Michaelis", "Integration PM", integrationPM231],
    [ "Stanley Noel", "Integration PM", integrationPM232]];
let mech_aero23 = [["William Tran", "Aerobody", aerobody23], ["Peyton Striblen", "Battery Pack", batterypack23], ["Ellie Alderman", "Brakes", brakes23],
    ["Oliver Tumbel", "Suspension", suspension23], ["Elijah Baluyot", "Chassis", chassis23]];
let electrical23 =  [["Yashasvi Bhat", "Telemetry", telemetry23], ["Jackson Werner", "Low Voltage", lowvoltage23]];

//2022-23: (Names, Positions, Headshot)
let executive_board22 = [["Christian Michaelis", "President", president22], ["Lauren Shaw", "Vice President", vicepresident22], ["Andrew Carter", "Secretary", secretary22],
    ["Anton Nguyen", "Treasurer", treasurer22], ["Stanley Noel", "Business Coordinator", business22]];
let pms22 = [["Marcelo Valdez", "Mechanical PM", mechanicalPM22],
    ["Taylor Gerke", "Electrical PM", electricalPM22],
    ["Timothy Dockham", "Integration PM", integrationPM22]];
let mech_aero22 = [["Alexander Theophanis", "Aerobody", aerobody22], ["Martin Lu", "Battery Pack", batterypack22], ["Remington Ewing", "Brakes", brakes22],
    ["Stanley Noel", "Suspension", suspension22], ["Anton Nguyen", "Chassis", chassis22]];
let electrical22 =  [["Yashasvi Bhat", "Embedded Systems", embeddedsystems22], ["Matthew Shen", "High Voltage", highvoltage22],
    ["Taylor Gerke", "Low Voltage", lowvoltage22], ["Emma Geon", "Power Management", powermanagement22]];
let competition_team22 = ['Ellie Alderman', 'Elijah Baluyot',
    'Yashasvi Bhat', 'Samuel Breslin', 'Andrew Carter',
    'Irene Chung', 'Timothy Dockham', 'Andres Duque', 'Connor Ellis',
    'Emma Geon', 'Taylor Gerke', 'Ruben Gonzalez',
    'Isabella Lucarelli', 'Christian Michaelis', 'Lacie Michaelis',
    'Anton Nyugen', 'Stanley Noel','Jack Schedel','Lauren Shaw',
    'Matthew Shen','Kurt Smith', 'Henry Stophel', 'Alexander Theophanis',
    'William Tran', 'Marcelo Valdez', 'Jackson Werner' ]

//2021-22
let executive_board21 = [["Charles Stone", "President", president21],
    ["Irene Chung", "Vice President",vicepresident21],
    ["Maya Greene", "Secretary", secretary21],
    ["Jamie Van Der Veken", "Treasurer", treasurer21],
    ["Christian Michaelis", "Business Coordinator", business21]];
let pms21 = [["Brenden Reiss", "Mechanical PM"],
    ["Muhamed Hobi", "Electrical PM", telemetry21],
    ["Pierre Angibaud", "Aero PM", aeroPM21]];
let mech_aero21 =[["Justin Nelson", "Aerobody", aerobody21],
    ["Morgen Anthony", "Solar Array", solararray21],
    ["Marcelo Valdez", "Battery Box", battery21],
    ["Lauren Shaw","Brakes", brakes21],
    ["Shane Lovello","Chassis",chassis21],
    ["Jessica Le", "Suspension", suspension21]];
let electrical21 = [["Taylor Gerke", "Auxiliary", auxiliary21],
    ["Yash Bhat", "Battery Management", bms21],
    ["Christian Michaelis", "Motor Control", motorcontroller21],
    ["Polina Leger", "Power Board", powerboard21],
    ["Muhamed Hobi", "Telemetry", telemetry21]];
let competition_team21 = ["Anton Nyugen", "Matthew Shen", "Morgen Anthony",
        'Jessica Ting', 'Martin Lu', 'Daniel Kogstrom', 'Remington Ewing',
        'Irene Chung', 'Christian Michaelis', 'Lauren Shaw',
        'Marcelo Valdez', 'Pierre Angibaud', 'Yash Bhat', 'Timothy Dockham',
        'John Carr', 'Brendan Reiss', 'Taylor Gerke', 'Stanley Noel'];

// 2020-21
let executive_board20 = [["Stephen Thomas", "President", president20],
    ["Charles Stone", "Vice President",vicepresident20],
    ["Yash Bhat", "Treasurer", treasurer20],
    ["Irene Chung", "Secretary", secretary20],
    ["Polina Leger", "Business Coordinator", business20]];
let pms20 = [["Bridgette Ortiz & Adam Edwards", "Mechanical PM"],
    ["Samuel Cuervo", "Electrical PM"],
    ["Valeria Niebles & Jennifer Brett", "Aero PM"]];

// 2019-20
let executive_board19 = [["Stephen Thomas", "President", president19],
    ["Mariana Casas", "Vice President",vicepresident19],
    ["Nathan Andreo", "Treasurer", treasurer19],
    ["Katie Preiser", "Secretary", secretary19],
    ["Kaitlyn Lyons", "Business Coordinator", business19]];
let pms19 = [["Jovani Hernandez", "Mechanical PM"],
    ["John Carr", "Electrical PM"],
    ["Pierre Angibaud", "Aero PM"],
    ["Valeria Giraldo", "General PM"]];


// GET FUNCTIONS -----------------------------
export const get_eboard = (year) => {
    if (year === "2019") { return executive_board19; }
    else if (year === "2020") { return executive_board20; }
    else if (year === "2021") { return executive_board21; }
    else if (year === "2022") { return executive_board22; }
    else if (year === "2023") { return executive_board23; }
    else { return ""; }
}

export const get_pms = (year) => {
    if (year === "2019") { return pms19; }
    else if (year === "2020") { return pms20; }
    else if (year === "2021") { return pms21; }
    else if (year === "2022") { return pms22; }
    else if (year === "2023") { return pms23; }
    else { return ""; }
}

export const get_mech = (year) => {
    if (year === "2021") { return mech_aero21; }
    else if (year === "2022") { return mech_aero22; }
    else if (year === "2023") { return mech_aero23; }
    else { return ""; }
}

export const get_elec = (year) => {
    if (year === "2021") { return electrical21; }
    else if (year === "2022") { return electrical22; }
    else if (year === "2023") { return electrical23; }
    else { return ""; }
}

export const get_comp_team = (year) => {
    if (year === "2021") { return competition_team21; }
    else if (year === "2022") { return competition_team22; }
    else { return ""; }
}