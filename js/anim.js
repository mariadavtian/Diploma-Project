document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', () => {
    // 1) deactivate all buttons & panels
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('show'));
    
    // 2) activate current
    const targetId = btn.dataset.tab;      // <- id to show
    btn.classList.add('active');
    document.getElementById(targetId).classList.add('show');
  });
});
document.querySelectorAll('.fc_hdr_li').forEach(btn => {
  btn.addEventListener('click', () => {
    /* 1 – buttons */
    document.querySelectorAll('.fc_hdr_li')
            .forEach(b => b.classList.remove('fc_hdr_active'));
    btn.classList.add('fc_hdr_active');

    /* 2 – panels */
    document.querySelectorAll('.fc_panel')
            .forEach(p => p.classList.remove('show'));

    const targetId = btn.dataset.tab;      
    document.getElementById(targetId)
            .classList.add('show');
  });
});