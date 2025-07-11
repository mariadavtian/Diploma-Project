const staffObj = [
    {
      id: 1,
      img: "./assets/staff/tnoren.jpg",
      name: "Կարինե Միքաելյան",
      title: "Տնօրեն",
      alt: "Տնօրեն - Կարինե Միքաելյան",
      type: "վարիչ",
    },
    {
      id: 2,
      img: "./assets/staff/Hambardzyumyan.jpg",
      name: "Գայանե Համբարձումյան",
      title: "Տնօրենի տեղակալ",
      alt: "Տնօրենի տեղակալ - Գայանե Համբարձումյան",
      type: "վարիչ",
    },
    {
      id: 3,
      img: "./assets/staff/Nahapetyan.jpg",
      name: "Դավիթ Նահապետյան",
      title: "Տնօրենի տեղակալ",
      alt: "Տնօչենի տեղակալ - Դավիթ Նահապետյան",
      type: "վարիչ",
    },
    {
      id: 4,
      img: "./assets/staff/fahradyan.jpg",
      name: "Աիդա Ֆահրադյան",
      title: "Հանրակրթության բաժնի վարիչ ",
      alt: "Հանրակրթության բաժնի վարիչ - Աիդա Ֆահրադյան",
      type: "վարիչ",
    },
    {
      id: 5,
      img: "./assets/staff/Nazaryan.jpg",
      name: "Ռոզա Նազարյան",
      title: " Տեղեկատվական տեխնոլոգիաների և <br> ծրագրավորման ամբիոն",
      alt: "Տեղեկատվական տեխնոլոգիաների և ծրագրավորման ամբիոնի վարիչ - Ռոզա Նազարյան",
      type: "ամբիոն",
    },
    {
      id: 6,
      img: "./assets/staff/Petrosyan.jpg",
      name: "Անի Պետրոսյան",
      title: "Հասարակագիտական և հումանիտար <br>  առարկաների ամբիոն",
      alt: "Հասարակագիտական և հումանիտար առարկաների ամբիոնի վարիչ - Անի Պետրոսյան",
      type: "ամբիոն",
    },
    {
      id: 7,
      img: "./assets/staff/Madatyan.jpg",
      name: "Վարդուհի Մադաթյան",
      title: "Մենեջմենթի և մարքեթինգի <br> ամբիոն",
      alt: "Մենեջմենթի ամբիոնի վարիչ - Վարդուհի Մադաթյան",
      type: "ամբիոն",
    },
    {
      id: 8,
      img: "./assets/staff/Hovsepyan.jpg",
      name: "Սյուզաննա Հովսեփյան",
      title: "Տնտեսագիտության <br> ամբիոն",
      alt: "Տնտեսագիտության ամբիոնի վարիչ - Սյուզաննա Հովսեփյան",
      type: "ամբիոն",
    }
  ];
  
  function renderStaff(arr, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return console.error("Container not found!");
  
    arr.forEach(e => {
      let staffItem = document.createElement('div');
      staffItem.classList.add('staff_box');
      staffItem.innerHTML = `
        <div class="staff_img">
          <img src="${e.img}" alt="${e.alt}">
        </div>
        <div class="staff_info my-2">
          <h4>${e.name}</h4>
          <span>${e.title}</span>
        </div>
      `;
      container.append(staffItem);
    });
  }
  
  renderStaff(staffObj.filter(f => f.type === "վարիչ"), "staffs-վարիչ");
  renderStaff(staffObj.filter(f => f.type === "ամբիոն"), "staffs-ամբիոն");
  