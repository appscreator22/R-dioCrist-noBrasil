import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio 93 FM",
            artist: "Radio93FM",
            cover: "https://img.freepik.com/vector-gratis/conjunto-dispositivos-radio_74855-308.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://26483.live.streamtheworld.com/FM93_SC",
            active: true,
        },
        {
            name:"Metropolis radio",
            artist: "Metropolisradio",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41317.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s13.maxcast.com.br:8194/live",
            active: false,
        },
        {
            name:"Radio Vida",
            artist: "RadioVida",
            cover: "https://img.freepik.com/vector-gratis/microfono-auriculares-retro-imagen-realista_1284-14415.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://hts06.kshost.com.br:9294/stream/1/",
            active: false,
        },
        {
            name:"Sara brasil",
            artist: "Sarabrasil",
            cover: "https://img.freepik.com/vector-gratis/realista-senal-aire_23-2148758072.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://hts07.kshost.com.br:13490/stream/1/",
            active: false,
        },
        {
            name:"Rádio Vinha FM",
            artist: "RádioVinhaFM",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41306.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://streaming.vinhafm.com.br/stream",
            active: false,
        },
        {
            name:"amazonia viva fm",
            artist: "amazoniavivafm",
            cover: "https://img.freepik.com/vector-gratis/plantilla-redes-sociales-radio-vivo_1419-2133.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://s03.maxcast.com.br:8112/live",
            active: false,
        },
        {
            name:"moda fm",
            artist: "modafm",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://sv13.hdradios.net:7836/stream/1/",
            active: false,
        },
        {
            name:"Radio Fonte",
            artist: "RadioFonte",
            cover: "https://img.freepik.com/foto-gratis/fondo-musica-o-podcast-auriculares-taza-cafe-mesa-azul-plana-vista-superior-plana_501050-983.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://livesh.com.br/proxy/fonte?mp=/stream/1/",
            active: false,
        },
        {
            name:"Boas novas Am",
            artist: "BoasnovasAm.",
            cover: "https://img.freepik.com/vector-gratis/plantilla-logotipo-microfono-auriculares_23-2148789043.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://directradios.net/proxy/rbc2?mp=/stream",
            active: false,
        },
    ];
}

export default chillHop;


