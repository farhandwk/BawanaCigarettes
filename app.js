//navbar
const navTentangkamiLanding = document.querySelector(".navTentangkami-landing")
const navHubungikamiLanding = document.querySelector(".navHubungikami-landing")
const navLokasiLanding = document.querySelector(".navLokasi-landing")

function shownavTentangkami() {
    navTentangkamiLanding.classList.add("shownavTentangkami-landing")
}

function closenavTentangkami() {
    navTentangkamiLanding.classList.remove("shownavTentangkami-landing")
}

function shownavHubungikami() {
    navHubungikamiLanding.classList.add("shownavHubungikami-landing")
}

function closenavHubungikami() {
    navHubungikamiLanding.classList.remove("shownavHubungikami-landing")
}

function shownavLokasi() {
    navLokasiLanding.classList.add("shownavLokasi-landing")
}

function closenavLokasi() {
    navLokasiLanding.classList.remove("shownavLokasi-landing")
}

//sidebarLanding
const imgHeaderLanding = document.querySelector(".imgHeader-landing")
const sidebarLanding = document.querySelector(".sidebar-landing")
const closesidebarLanding = document.querySelector(".closesidebar-landing")


imgHeaderLanding.addEventListener("click", () => {
    if (sidebarLanding.classList.contains("showsidebar-landing")) {
        sidebarLanding.classList.remove("showsidebar-landing")
    } else {
        sidebarLanding.classList.add("showsidebar-landing")
    }
})

closesidebarLanding.addEventListener("click", () => {
    if (sidebarLanding.classList.contains("showsidebar-landing")) {
        sidebarLanding.classList.remove("showsidebar-landing")
    } else {
        sidebarLanding.classList.add("showsidebar-landing")
    }
})

//mematikan menghidupkan sidebarLanding berdasarkan ukuran layar

// document.addEventListener("DOMContentLoaded", ()=> {
//     const containerLanding = document.querySelector(".container-landing")
//     const getStyle = window.getComputedStyle(containerLanding)
//     let varWidth = getStyle.width
//     if (varWidth.includes("480px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else if (varWidth.includes("640px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else if (varWidth.includes("768px")) {
//         let logo = "SRC/tombolNavbar.png"
//         imgHeaderLanding.src = logo
//     }
//     else {
//         let logo = "SRC/logo tembakau no background.png"
//         imgHeaderLanding.src = logo
//         sidebarLanding.style.display = "none"
//     }
// })

//variabel container all
const containerAll = document.querySelector(".containerAll")

//variabel container
const containerLanding = document.querySelector(".container-landing")
const getStyle = window.getComputedStyle(containerLanding)
let varWidth = parseInt(getStyle.width)
let varHeight = parseInt(getStyle.height)

//variabel judul landing
const judulLanding = document.querySelector(".judul-landing")

//variabel nav landing
const navLanding = document.querySelector(".nav-landing")

//variabel p landing
const pLanding = document.querySelector(".p-landing")

//variabel container btn landing
const containerBtnLanding = document.querySelector(".containerBtn-landing")

//variabel btn landing
const btnLanding = document.querySelector(".btn-landing")

//variaber container LP landing
const containerLPLanding = document.querySelector(".containerLamsiPaksi-landing")

//variabel btn LP landing
const btnLPLanding = document.querySelectorAll(".btnLP-landing")

//variabel p2 landing
const p2Landing = document.querySelector(".p2-landing")

// variabel containerTembakau tembakau
const containerTembakau = document.querySelector(".container-tembakau")

// variabel containerTembakau1 tembakau
const containerTembakau1 = document.querySelector(".container1-tembakau")

//variabel containerTembakau2 tembakau
const containerTembakau2 = document.querySelector(".container2-tembakau")

//variabel img Tembakau
const imgTembakau = document.querySelectorAll(".img-tembakau")

//variabel imgTembakau 1
const imgTembakau1 = document.querySelector(".img1")

//variabel imgTembakau 1
const imgTembakau2 = document.querySelector(".img2")

//variabel p tembakau
const pTembakau = document.querySelectorAll(".p-tembakau")

// variabel Container Lamsi
const containerLamsi = document.querySelector(".container-lamsi");
// Variabel Section Lamsi
const contentLamsi = document.querySelector(".content-lamsi");
// Variabel gambar Lamsi
const pictureLamsi = document.querySelector(".picture-lamsi");
const gambarLamsi1 = document.querySelector(".gambar-1-lamsi");
const gambarLamsi2 = document.querySelector(".gambar-2-lamsi");

// Variabel Judul Lamsi
const judulLamsi = document.querySelector(".judul-lamsi");
const styleTembakauLamsi = document.querySelector(".Tembakau-lamsi");
const styleLamsiLamsi = document.querySelector(".lamsi-lamsi");
// Variabel Text Lamsi
const textLamsi = document.querySelector(".text-lamsi");
// Variabel Parent Text Lamsi
const isiLamsi = document.querySelector(".isi-lamsi");
// Variabel Button Lamsi
const buttonLamsi = document.querySelector(".click-button-lamsi-button");


// variabel paksi
const containerPaksi = document.querySelector(".container-paksi");
const kepalaPaksi = document.querySelector(".kepala-paksi");
const tembakauPaksi = document.querySelector(".tembakau-paksi");
const paksiPaksi = document.querySelector(".paksi-paksi");
const backgroundPaksi = document.querySelector(".background-paksi");
const baganSatuPaksi = document.querySelector(".bagan-1-paksi");
const gambarSatuPaksi = document.querySelector(".gambar-paksi1");
const gambarDuaPaksi = document.querySelector(".gambar-paksi2");
const layoutPaksi = document.querySelector(".layout-paksi");
const backgroundPaksi2 = document.querySelector(".background2-paksi");
const buttonPaksi = document.querySelector(".learn-more-paksi button");

//variabel footer
// Variabel Container Footer
const containerfooter = document.querySelector(".container-footer");
// Variabel Footer Atas
const footerAtas = document.querySelector(".footer-atas");
// Variabel  Footer AtasList
const footerAtasList = document.querySelectorAll(".footer-atas-list");
// Variabel  Footer AtasList Paragraph
const footerAtasListParagraph = document.querySelectorAll(
    ".footer-atas-paragraph"
);
// Variabel  Footer AtasList Link
const footerAtasListAnchor = document.querySelectorAll(".footer-atas-anchor");
// Variabel  Footer AtasList Gambar
const footerAtasListImage = document.querySelectorAll(".footer-atas-image");
// Variabel  Footer Bawah
const footerBawah = document.querySelector(".footer-bawah");
// Variable main footer
const mainFooter = document.querySelector(".main-footer");
// Variable bagan Update Footer
const updateFooter = document.querySelector(".update-footer");
const updateFooterH3 = document.querySelector(".update-footer-h3");
const updateFooterP = document.querySelector(".update-footer-p");
// Variabel  Layout (penataan) footer bagan 2
const positionFooter2 = document.querySelector(".position-2-footer");
// Variabel  Layout (penataan) footer bagan 2 Paragraf
const positionFooter2ListParagraph = document.querySelectorAll(
    ".position-2-footer-li-p"
);
// Variabel  Layout (penataan) footer bagan 2 Link
const positionFooter2ListAnchor = document.querySelectorAll(
    ".position-2-footer-li-a"
);
const lineHeightFooter = document.querySelectorAll(".lineHeight");
// Variable Logo Footer
const logoFooter = document.querySelector(".logo");
// Variable Logo List Image Footer
const logoFooterListImage = document.querySelectorAll(".logo-li-img");
// Varible Policy Footer
const policyFooter = document.querySelector(".policy-foooter");
// Variable bagan Bendera dan Bahasa
const bahasaFooter = document.querySelector(".bahasa-foooter");
// Variable bagan Bendera dan Bahasa Paragraf
const bahasaFooterParagraph = document.querySelector(".bahasa-foooter-p");
// Variable bagan Bendera dan Bahasa Gambar
const bahasaFooterImage = document.querySelector(".bahasa-foooter-img");
// Variable List Policy Footer
const listPolicy = document.querySelector(".list-policy");
// Variable List Policy Footer Unlist
const listPolicyUnlist = document.querySelectorAll(".list-policy-ul");
// Variable List Policy Footer Link
const listPolicyAnchor = document.querySelectorAll(".list-policy-a");
// Variable Hr
const hr = document.querySelector("hr");

const kontol = document.querySelector(".kontol")

document.addEventListener("DOMContentLoaded", () => {
    if (varHeight > varWidth) {
        //style container All
        containerAll.style.backgroundImage = "url(SRC/480x845-Landing.png)"
            //style container landing
        containerLanding.style.height = "86vh"
            // containerLanding.style.backgroundImage = "url(SRC/480x845-Landing.png)"
            //style imgHeaderLanding
        let logo = "SRC/tombolNavbar.png"
        imgHeaderLanding.src = logo
        imgHeaderLanding.style.width = "10%"
        imgHeaderLanding.style.height = "5.5vh"
        imgHeaderLanding.style.margin = "3.5%"
            //style judul landing
        judulLanding.style.marginLeft = "33.5%"
        judulLanding.style.fontSize = "10vw"
            //style nav landing
        navLanding.style.display = "none"
        navLanding.style.backgroundSize = "100% 100vh"
            //style p landing
        pLanding.style.fontSize = "10vw"
        pLanding.style.marginLeft = "11%"
            //style container btn landing
        containerBtnLanding.style.height = "53vh"
            //style btn landing
        btnLanding.style.marginLeft = "11%"
        btnLanding.style.width = "53%"
        btnLanding.style.height = "8vh"
        btnLanding.style.fontSize = "4.5vw"
        btnLanding.style.borderRadius = "4.5vw"
            //style container LP landing
            //style btn LP landing
        btnLPLanding.forEach(btnLPLanding => {
                btnLPLanding.style.width = "26.5vw"
                btnLPLanding.style.height = "6vh"
                btnLPLanding.style.fontSize = "3.8vw"
                btnLPLanding.style.borderRadius = "4.5vw"
            })
            //style p2 landing
        p2Landing.style.marginLeft = "13%"
        p2Landing.style.fontSize = "4.5vw"
            //style containerTembakau
        containerTembakau.style.backgroundImage = "url(SRC/768x1365.png)"
        containerTembakau.style.display = "flex"
        containerTembakau.style.flexDirection = "column"
            //style containerTembakau1
        containerTembakau1.style.width = "100vw"
        containerTembakau1.height = "50vh"
            //style containerTembakau2
        containerTembakau2.style.width = "100vw"
        containerTembakau2.height = "50vh"
            //style imgTembakau tembakau
        imgTembakau.forEach(imgTembakau => {
                imgTembakau.style.width = "55vw"
                imgTembakau.style.height = "20vh"
            })
            //style imgTembakau1
        imgTembakau1.style.marginLeft = "-25%"
        imgTembakau1.style.marginTop = "5%"
            //style imgTembakau2
        imgTembakau2.style.marginRight = "-25%"
        imgTembakau2.style.marginTop = "5%"
            //style p tembakau
        pTembakau.forEach(pTembakau => {
                pTembakau.style.fontSize = "3.5vw"
            })
            // style container LP
            // containerLPLanding.style.position = "absolute"
        containerLPLanding.style.left = "11vw"
        containerLPLanding.style.width = "89vw"
        containerLPLanding.style.zIndex = "2"
            // style lamsi
        containerLamsi.style.backgroundImage = "url('SRC/768x1365.png')";
        contentLamsi.style.width = "100% ";
        pictureLamsi.style.gap = 0;
        judulLamsi.style.gap = 0;
        judulLamsi.style.justifyContent = "center";
        styleTembakauLamsi.style.paddingLeft = "1vw";
        styleTembakauLamsi.style.fontSize = "10vw";
        styleTembakauLamsi.style.letterSpacig = "-4px";
        styleLamsiLamsi.style.paddingLeft = "5vw";
        styleLamsiLamsi.style.fontSize = "10vw";
        styleLamsiLamsi.style.letterSpacig = "-4px";
        gambarLamsi1.style.width = "55vw";
        gambarLamsi1.style.height = "40vh";
        kontol.style.flexDirection = "column-reverse"
        kontol.style.alignItems = "center"
        kontol.style.rowGap = "6vw"
        gambarLamsi2.style.display = "none"

        textLamsi.style.paddingLeft = " 2vw";
        textLamsi.style.fontSize = "3vw";
        textLamsi.style.marginLeft = "2.5vw"
        textLamsi.style.marginRight = "2.5vw"
        buttonLamsi.style.width = "18vw";
        buttonLamsi.style.height = "4vh";
        buttonLamsi.style.fontSize = "3vw";

        // style paksi
        containerPaksi.style.backgroundImage = "url('SRC/475x845.png')";
        containerPaksi.style.rowGap = "3vh"
        kepalaPaksi.style.marginRight = "2vw";
        kepalaPaksi.style.marginBottom = "3vh";
        tembakauPaksi.style.fontSize = "11vw";
        paksiPaksi.style.fontSize = "11vw";
        backgroundPaksi.style.display = "none";
        baganSatuPaksi.style.display = "flex";
        baganSatuPaksi.style.justifyContent = "center";
        gambarSatuPaksi.style.width = "75vw";
        gambarSatuPaksi.style.height = "28vh";
        gambarSatuPaksi.style.borderRadius = "1vw"
        gambarSatuPaksi.style.display = "flex";
        gambarSatuPaksi.style.justifyContent = "center";
        gambarDuaPaksi.style.display = "none";
        layoutPaksi.style.flexDirection = "column";
        backgroundPaksi2.style.width = "auto";
        backgroundPaksi2.style.marginBottom = "1vh";
        backgroundPaksi2.style.marginLeft = "7vw";
        backgroundPaksi2.style.marginRight = "7vw";
        backgroundPaksi2.style.fontSize = "3.2vw";
        backgroundPaksi2.style.textAlign = "center";
        buttonPaksi.style.marginTop = "2vh";
        buttonPaksi.style.width = "21vw";
        buttonPaksi.style.height = "4vh";
        buttonPaksi.style.fontSize = "3vw";

        const style = document.createElement("style");

        const cssRulePaksi = `
          .background2-paksi::before {
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
              }
          `;
        style.appendChild(document.createTextNode(cssRulePaksi));
        document.head.appendChild(style);
        backgroundPaksi2.classList.add("background2-paksi");

        //style footer
        if (containerfooter) {
            containerfooter.style.width = "100vw";
            containerfooter.style.height = "100vh";
            containerfooter.style.padding = "0";
            containerfooter.style.margin = "0";
        }

        if (footerAtas) {
            footerAtas.style.width = "100%";
            footerAtas.style.height = "20vh";
        }

        footerAtasList.forEach((li) => {
            li.style.display = "flex";
            li.style.flexDirection = "column";
            li.style.justifyContent = "center";
            li.style.alignItems = "center";
        });

        footerAtasListParagraph.forEach((p) => {
            p.style.fontSize = "1.9vw";
        });

        footerAtasListAnchor.forEach((a) => {
            a.style.fontSize = "1.8vw";
        });

        footerAtasListImage.forEach((img) => {
            img.style.width = "6vw";
            img.style.height = "3vh";
            img.style.marginBottom = "3vh";
        });

        if (footerBawah) footerBawah.style.height = "80vh";
        if (mainFooter) {
            mainFooter.style.display = "flex";
            mainFooter.style.flexDirection = "column";
            mainFooter.style.marginBottom = "10vh";
        }
        if (updateFooter) {
            updateFooter.style.width = "90vw";
            updateFooter.style.marginBottom = "5vh";
        }
        if (updateFooterH3) {
            updateFooterH3.style.fontSize = "8vw";
            updateFooterH3.style.marginBottom = "5vh";
            updateFooterH3.style.display = "flex";
            updateFooterH3.style.justifyContent = "center";
        }
        if (updateFooterP) {
            updateFooterP.style.marginLeft = "4vw";
            updateFooterP.style.fontSize = "3.3vw";
            updateFooterP.style.width = "90vw";
            updateFooterP.style.display = "flex";
            updateFooterP.style.justifyContent = "center";
            updateFooterP.style.alignItems = "center";
            updateFooter.style.textAlign = "center";
        }
        if (positionFooter2) positionFooter2.style.width = "90vw";
        positionFooter2ListParagraph.forEach((p) => {
            p.style.fontSize = "3vw";
        });
        positionFooter2ListAnchor.forEach((a) => {
            a.style.fontSize = "2.2vw";
        });
        if (logoFooter) {
            logoFooter.style.width = "92vw";
            logoFooter.style.marginTop = "7vw";
            logoFooter.style.marginBottom = "2vh";
        }
        lineHeightFooter.forEach((line) => {
            line.style.lineHeight = "2.2vh";
        });

        logoFooterListImage.forEach((img) => {
            img.style.width = "5vw";
            img.style.height = "3vh";
        });

        if (policyFooter) {
            policyFooter.style.marginTop = "3vh";
            policyFooter.style.justifyContent = "space-around";
            policyFooter.style.gap = "3vw";
        }
        if (bahasaFooter) {
            bahasaFooter.style.marginLeft = "0";
            bahasaFooter.style.paddingTop = "2vw";
            bahasaFooter.style.alignItems = "start";
        }
        if (bahasaFooterImage) {
            bahasaFooterImage.style.width = "8vw";
            bahasaFooterImage.style.height = "4vh";
        }
        if (bahasaFooterParagraph) bahasaFooterParagraph.style.fontSize = "2.5vw";

        listPolicyAnchor.forEach((a) => {
            a.style.fontSize = "2vw";
        });

        if (hr) hr.style.width = "96vw";
        if (listPolicy) {
            listPolicy.style.flexWrap = "wrap";
            listPolicy.style.marginRight = "0";
            listPolicy.style.width = "30vw";
        }

        listPolicyUnlist.forEach((ul) => {
            ul.style.display = "flex";
            ul.style.justifyContent = "center";
            ul.style.width = "15vw";
            ul.style.padding = "0";
        });
    } else {
        let logo = "SRC/logo tembakau no background.png"
        imgHeaderLanding.src = logo
        sidebarLanding.style.display = "none"
    }
})


//isi sidebarLanding
const tentangkamiSidebar = document.getElementById("tentangkamiSidebar-landing")
const hubungikamiSidebar = document.getElementById("hubungikamiSidebar-landing")
const lokasiSidebar = document.getElementById("lokasiSidebar-landing")

function opententangkamiSidebar() {
    if (tentangkamiSidebar.classList.contains("showsubisiSidebar-landing")) {
        tentangkamiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        tentangkamiSidebar.classList.add("showsubisiSidebar-landing")
    }
}

function openhubungikamiSidebar() {
    if (hubungikamiSidebar.classList.contains("showsubisiSidebar-landing")) {
        hubungikamiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        hubungikamiSidebar.classList.add("showsubisiSidebar-landing")
    }
}

function openlokasiSidebar() {
    if (lokasiSidebar.classList.contains("showsubisiSidebar-landing")) {
        lokasiSidebar.classList.remove("showsubisiSidebar-landing")
    } else {
        lokasiSidebar.classList.add("showsubisiSidebar-landing")
    }
}


btnLanding.addEventListener("click", () => {
    if (containerLPLanding.classList.contains("showcontainerLamsiPaksi-landing")) {
        containerLPLanding.classList.remove("showcontainerLamsiPaksi-landing")
    } else {
        containerLPLanding.classList.add("showcontainerLamsiPaksi-landing")
    }
})

//rotate shop now
const shopnowBtn = document.querySelector(".btn-landing")
const chevronShopnow = document.getElementById("chevronShopnow-landing")
let isRotated = false

shopnowBtn.addEventListener("click", function() {
    if (!isRotated) {
        chevronShopnow.style.transform = "rotate(90deg)"
        isRotated = true
    } else {
        chevronShopnow.style.transform = "rotate(0deg)"
        isRotated = false
    }
})