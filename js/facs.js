const facs = [
    {
        id: 1, 
        img: "./assets/facs/programming.jpg",
        title: "Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում",
        qual: "Ծրագրավորող, Տեխնիկ",
        time: "4 տարի",
        link: "./programming.html",
        alt: "Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովման բաժին ",
        type: "on",
    },
    {
        id: 2, 
        img: "./assets/facs/bank.jpg",
        title: "Բանկային գործ",
        qual: "Բանկային գործի մասնագետ",
        time: "3 տարի",
        link: "./bank.html",
        alt: "Բանկային գործի բաժին ",
        type: "on",

    },
    {
        id: 3, 
        img: "./assets/facs/director.jpg",
        title: "Ռեժիսուրա",
        qual: "Ռեժիսոր",
        time: "4 տարի",
        link: "./directing.html",
        alt: "Ռեժիսուրայի բաժին ",
        type: "on",
    },
    {
        id: 4, 
        img: "./assets/facs/trading.jpg",
        title: "Առևտուր*",
        qual: "Կոմերսանտ",
        time: "3 տարի",
        link: "./trading.html",
        alt: "Առևտրի բաժին ",
        type: "on",
    },
    {
        id: 5, 
        img: "./assets/facs/argiculture.jpg",
        title: "Գյուղատնտեսագիտություն*",
        qual: "Գյուղատնտես",
        time: "3 տարի",        
        link: "./argiculture.html",
        alt: "Գյուղատնտեսագիտության բաժին ",
        type: "on",


    },
    {
        id: 6, 
        img: "./assets/facs/management.jpg",
        title: "Սպասարկման կազմակերպում*",
        qual: "Մենեջեր՝ սպասարկման ոլորտի",
        time: "3 տարի",
        link: "./management.html",
        alt: "Սպասարկման կազմակերպման բաժին ",
        type: "on",

    },
    {
        id: 7, 
        img: "./assets/facs/accounting.jpg",
        title: "Հաշվապահական հաշվարկում",
        qual: "Հաշվապահ",
        time: "3 տարի",
        link: "./accounting.html",
        alt: "Հաշվապահական հաշվարկում ",
        type: "off",
    },
    {
        id: 8, 
        img: "./assets/facs//preshcool.jpg",
        title: "Նախադպրոցական կրթություն",
        qual: "Դաստիարակ",
        time: "3 տարի",
        link: "./assets/files/Նախադպրոցական_կրթություն.pdf",
        alt: "Նախադպրոցական կրթության բաժին",
        type: "off",
    },
    {
        id: 9, 
        img: "./assets/facs/librarian.jpg",
        title: "Գրադարանային գործ",
        qual: "Գրադարանավար",
        time: "3 տարի",
        link: "./assets/files/Գրադարանային_գործ.pdf",
        alt: "Գրադարանային գործի բաժին",
        type: "off",
    },

    ]

    function renderFaculties(arr, containerId) {
        const container = document.getElementById(containerId);
        arr.forEach(e => {
            let facItem = document.createElement('div');
            facItem.classList.add('facs');
            facItem.innerHTML = `
                <div class="facs_img">
                    <img src="${e.img}" alt="${e.title}">
                </div>
                <div class="facs_info">
                    <div class="facs_box"><h5>${e.title}</h5></div>
                    <div class="facs_body my-4">
                        <span><i class="fa-solid fa-file-contract"></i></span>
                        <span>${e.qual}</span>
                        <span><i class="fa-solid fa-clock-rotate-left"></i></span>
                        <span>${e.time}</span>
                    </div>
                    <div class="facs_btn">
                        <a href="${e.link}" target="_blank" class="btn">Ավելին</a>
                    </div>
                </div>
            `;
            container.append(facItem);
        });
    }
    renderFaculties(facs.filter(f => f.type === "on"), "facs-on");
    renderFaculties(facs.filter(f => f.type === "off"), "facs-off");