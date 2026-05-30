
/* ---------- DEFAULT DATA ---------- */
var D = {
    n1: 'Emma', n2: 'James', mono: 'E & J', tag: 'We Are Getting Married',
    hash: '#EmmaAndJames2026', quote: 'Together is our favourite place to be',
    email: 'hello@couple.com',
    date: '2026-06-14', ddate: 'Saturday, 14 June 2026', rsvpdl: '1st May 2026',
    cLbl: 'Wedding Ceremony', cdate: 'Saturday, 14 June 2026', ct: '2:00 PM',
    cn: "St. Mary's Chapel", ch: 'Main Hall', ca: '123 Garden Lane, London', cd: 'Smart Casual', cmap: '',
    rLbl: 'Wedding Reception', rdate: 'Saturday, 14 June 2026', rt: '7:00 PM',
    rn: 'The Grand Ballroom', rh: 'Garden Suite', ra: '456 Rose Street, London', rd: 'Black Tie Optional', rmap: '',
    hot: 'The Grand Hotel', hcode: 'WEDDING2026', hdisc: '15%', hdl: '1st May 2026',
    park: 'Complimentary valet parking', shut: 'Shuttle from hotel every 30 mins',
    showPhotos: true, showCer: true, showRec: true, showHot: true, showDir: true,
    showTl: true, showParty: true, showGal: true, showFaq: true, showReg: false,
    showRsvpC: true, showRsvpR: true,
    regNote: "Your presence is the only gift we need. However if you'd like to give, we have a small registry to help us settle into our new home together.",
    regLink: '', regBtn: 'View Our Registry', gform: '',
    imgs: ['', '', '', '', ''],
    story: [
        { yr: '2019 · New York', h: 'The First Hello', t: "A rooftop gathering, a shared laugh, and two strangers who stayed up until 2am talking. Neither of them wanted the night to end." },
        { yr: '2020 · Paris', h: 'Our First Date', t: "A riverside café, flowers, and a walk along the Seine at dusk. She knew then that this was someone worth keeping forever." },
        { yr: '2021 · Barcelona', h: 'Adventures Together', t: "Their first trip abroad — tapas bars, golden sunsets, and the kind of laughter that follows you home. They got gloriously lost and found something better." },
        { yr: '2023 · Tuscany', h: 'The Proposal', t: "Rolling hills, a vineyard at golden hour, and the moment everything changed. He got down on one knee — she said yes before he finished the question." },
        { yr: '2026 · London', h: 'Forever Begins', t: "Now they invite every person they love most to celebrate as two become one. The best chapter is just beginning — and we're so glad you'll be part of it." }
    ],
    tl: [
        { t: '1:30 PM', e: 'Guest arrival & seating' },
        { t: '2:00 PM', e: 'Wedding ceremony begins' },
        { t: '3:00 PM', e: 'Ceremony concludes · Drinks reception' },
        { t: '5:00 PM', e: 'Couple portrait session' },
        { t: '7:00 PM', e: 'Reception doors open' },
        { t: '8:00 PM', e: 'Dinner & celebrations begin' },
        { t: '10:00 PM', e: 'First dance & speeches' },
        { t: 'Midnight', e: 'Evening concludes — farewell & fond memories', g: true }
    ],
    party: [
        { name: 'Olivia Smith', role: 'Maid of Honour', side: 'b', img: '' },
        { name: 'Sophie Brown', role: 'Bridesmaid', side: 'b', img: '' },
        { name: 'Chloe Davis', role: 'Bridesmaid', side: 'b', img: '' },
        { name: 'William Jones', role: 'Best Man', side: 'g', img: '' },
        { name: 'Harry Wilson', role: 'Groomsman', side: 'g', img: '' },
        { name: 'Thomas Lee', role: 'Groomsman', side: 'g', img: '' }
    ],
    faq: [
        { q: 'Is there parking available?', a: 'Yes, complimentary valet parking is available at both venues. Please let us know if you have special requirements.' },
        { q: 'Are children welcome?', a: "We love your little ones! Children are welcome at both events. Please indicate number of children when you RSVP." },
        { q: 'What should I wear?', a: 'Smart casual for the ceremony and black tie optional for the reception. Feel free to dress up and celebrate with us!' },
        { q: 'Can I take photos during the ceremony?', a: 'We kindly ask that you enjoy the ceremony without cameras so our photographer can capture every moment. Feel free to take photos at the reception!' },
        { q: 'Will you cater for dietary requirements?', a: 'Absolutely. Please note any dietary requirements in your RSVP — we will ensure everyone is well catered for, including Halal, Kosher, vegetarian and vegan options.' },
        { q: 'Is there accommodation nearby?', a: 'Yes! We have arranged a special rate at a nearby hotel. Use the code shown on our Details page when booking.' }
    ]
};

/* ---------- RENDER ---------- */
function render() {
    var fn = D.n1 + ' & ' + D.n2;
    // Envelope
    var en = document.getElementById('env-names'); if (en) en.textContent = fn;
    var ed = document.getElementById('env-date'); if (ed) ed.textContent = D.ddate;
    // Nav
    setText('navlogo', D.mono);
    // Hero
    setText('htagline', D.tag); setText('hname1', D.n1); setText('hname2', D.n2);
    setText('hdate', D.ddate);
    setText('hvenue', D.cn + (D.ca ? ', ' + D.ca.split(',').slice(1).join(',').trim() : ''));
    setText('hhash', D.hash);
    // RSVP eyebrow
    setText('rsvpey', 'Kindly Reply By ' + D.rsvpdl);
    // Success text
    setText('oktxt', "We've received your RSVP and can't wait to celebrate with you.<br><br>" + fn + ' \uD83D\uDC9B');
    // Footers
    for (var i = 0; i < 7; i++) { setText('fq' + i, D.quote); setText('fs' + i, fn + ' · ' + D.ddate); }
    var fm = document.getElementById('fm0');
    if (fm) fm.innerHTML = D.email ? 'Questions? <a href="mailto:' + D.email + '">' + D.email + '</a>' : '';
    var fe = document.getElementById('faqemail'); if (fe) fe.href = 'mailto:' + D.email;

    // Photo strip
    var pw = document.getElementById('pstrip-wrap'); if (pw) pw.style.display = D.showPhotos ? '' : 'none';
    for (var j = 1; j <= 5; j++) {
        var cell = document.getElementById('ps' + j); if (!cell) continue;
        var url = D.imgs[j - 1];
        if (url) { cell.innerHTML = '<img src="' + url + '" alt="Photo ' + j + '" onerror="this.parentElement.innerHTML=\'<div class=pstrip-ph><span class=ico>\uD83D\uDCF7</span><span class=lbl>Photo ' + j + '</span></div>\'" style="width:100%;height:100%;object-fit:cover">'; }
        else { cell.innerHTML = '<div class="pstrip-ph"><span class="ico">\uD83D\uDCF7</span><span class="lbl">Photo ' + j + '</span></div>'; }
    }

    // Story
    var stl = document.getElementById('story-tl');
    if (stl) stl.innerHTML = D.story.map(function (s, i) { return '<div class="tli"><div class="tld">0' + (i + 1) + '</div><div><p class="tly">' + s.yr + '</p><h3 class="tlh">' + s.h + '</h3><p class="tlt">' + s.t + '</p></div></div>'; }).join('');

    // Details
    var dg = document.getElementById('dgrid'); if (!dg) return;
    var cards = '';
    if (D.showCer) cards += makeCard('💐', 'Ceremony', D.cLbl, D.cdate, D.ct, D.cn + ', ' + D.ch, D.ca, D.cd, D.cmap);
    if (D.showRec) cards += makeCard('🥂', 'Reception', D.rLbl, D.rdate, D.rt, D.rn + ', ' + D.rh, D.ra, D.rd, D.rmap);
    if (D.showHot) cards += '<div class="dcard"><div class="dcard-ico">\uD83C\uDFE8</div><p class="dcard-type">Stay</p><h3 class="dcard-title">Accommodation</h3><div class="drow"><span class="dk">Hotel</span><span class="dv">' + D.hot + '</span></div><div class="drow"><span class="dk">Code</span><span class="dv">' + D.hcode + ' — ' + D.hdisc + ' off</span></div><div class="drow"><span class="dk">Book by</span><span class="dv">' + D.hdl + '</span></div></div>';
    if (D.showDir) cards += '<div class="dcard"><div class="dcard-ico">\uD83D\uDE97</div><p class="dcard-type">Getting There</p><h3 class="dcard-title">Directions</h3><div class="drow"><span class="dk">Address</span><span class="dv">' + D.ca + '</span></div><div class="drow"><span class="dk">Parking</span><span class="dv">' + D.park + '</span></div><div class="drow"><span class="dk">Shuttle</span><span class="dv">' + D.shut + '</span></div></div>';
    dg.innerHTML = cards;

    // Timeline
    var tlsec = document.getElementById('tlsec'); if (tlsec) tlsec.style.display = D.showTl ? '' : 'none';
    var dtl = document.getElementById('daytl');
    if (dtl) dtl.innerHTML = D.tl.map(function (t) { return '<div class="tlsi"><span class="tlst">' + t.t + '</span><div class="tlsd' + (t.g ? ' gold' : '') + '"></div><span class="tlse">' + t.e + '</span></div>'; }).join('');

    // Registry
    var rs = document.getElementById('regsec'); if (rs) rs.style.display = D.showReg ? '' : 'none';
    setText('regnote', D.regNote);
    var rb = document.getElementById('regbtn');
    if (rb) { if (D.regLink) { rb.href = D.regLink; rb.textContent = D.regBtn; rb.style.display = 'inline-block'; } else rb.style.display = 'none'; }

    // Party nav
    toggleNavItem('nb-party', 'mbnp', D.showParty);
    toggleNavItem('nb-gallery', 'mbng', D.showGal);
    toggleNavItem('nb-faq', 'mbnf', D.showFaq);

    // Party grid
    var bride = D.party.filter(function (p) { return p.side === 'b' && p.name; });
    var groom = D.party.filter(function (p) { return p.side === 'g' && p.name; });
    var bg = document.getElementById('bride-grid'); if (bg) bg.innerHTML = bride.map(partyCard).join('');
    var gg = document.getElementById('groom-grid'); if (gg) gg.innerHTML = groom.map(partyCard).join('');
    var bs = document.getElementById('bridal-section'); if (bs) bs.style.display = bride.length ? '' : 'none';
    var gs = document.getElementById('groom-section'); if (gs) gs.style.display = groom.length ? '' : 'none';

    // Gallery
    var galg = document.getElementById('galgrid');
    if (galg) {
        var imgs = D.imgs.filter(Boolean);
        var total = Math.max(6, imgs.length);
        var gh = '';
        for (var k = 0; k < total; k++) {
            var url2 = imgs[k] || '';
            if (url2) gh += '<div class="gcell"><img src="' + url2 + '" alt="Gallery ' + (k + 1) + '" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML=\'<div class=gph><span class=gi>\uD83D\uDCF7</span><span class=gt>Photo</span></div>\'"></div>';
            else gh += '<div class="gcell"><div class="gph"><span class="gi">\uD83D\uDCF7</span><span class="gt">Photo ' + (k + 1) + '</span></div></div>';
        }
        galg.innerHTML = gh;
    }

    // FAQ
    var fl = document.getElementById('faqlist');
    if (fl) fl.innerHTML = D.faq.filter(function (f) { return f.q; }).map(function (f, i) { return '<div class="fitem"><div class="fq" onclick="toggleFaq(' + i + ')"><span class="fqt">' + f.q + '</span><span class="fqico" id="fqi' + i + '">＋</span></div><div class="fans" id="fan' + i + '"><div class="fansi">' + f.a + '</div></div></div>'; }).join('');

    // RSVP events
    var ec = document.getElementById('evchks');
    if (ec) {
        var ev = '';
        if (D.showRsvpC) ev += '<label class="eck"><input type="checkbox"> ' + D.cLbl + '</label>';
        if (D.showRsvpR) ev += '<label class="eck"><input type="checkbox"> ' + D.rLbl + '</label>';
        ec.innerHTML = ev;
    }
    var evsec = document.getElementById('evsec');
    if (evsec) evsec.style.display = (D.showRsvpC || D.showRsvpR) ? '' : 'none';
    var sb = document.getElementById('rsvpbtn');
    if (sb) {
        if (D.gform) { sb.textContent = 'Open RSVP Form ↗'; sb.onclick = function () { window.open(D.gform, '_blank'); }; }
        else { sb.textContent = 'Send My RSVP'; sb.onclick = submitRSVP; }
    }
}

function makeCard(ico, type, title, date, time, venue, addr, dress, mapUrl) {
    var vlink = mapUrl ? '<a href="' + mapUrl + '" target="_blank">' + venue + ' ↗</a>' : venue;
    return '<div class="dcard"><div class="dcard-ico">' + ico + '</div><p class="dcard-type">' + type + '</p><h3 class="dcard-title">' + title + '</h3><div class="drow"><span class="dk">Date</span><span class="dv">' + date + '</span></div><div class="drow"><span class="dk">Time</span><span class="dv">' + time + '</span></div><div class="drow"><span class="dk">Venue</span><span class="dv">' + vlink + '</span></div><div class="drow"><span class="dk">Address</span><span class="dv">' + addr + '</span></div><div class="drow"><span class="dk">Dress</span><span class="dv">' + dress + '</span></div></div>';
}
function partyCard(p) {
    var ini = p.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2);
    var av = p.img ? '<img src="' + p.img + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover" onerror="this.innerHTML=\'' + ini + '\'">' : ini;
    return '<div class="pcard"><div class="pava">' + av + '</div><p class="pname">' + p.name + '</p><p class="prole">' + p.role + '</p></div>';
}
function toggleNavItem(nbId, mobId, show) {
    var nb = document.getElementById(nbId); if (nb) nb.style.display = show ? '' : 'none';
    var mb = document.getElementById(mobId); if (mb) mb.style.display = show ? '' : 'none';
}
function setText(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

/* ---------- EDITOR ---------- */
function edOpen() { syncInputs(); document.getElementById('edpan').classList.add('on'); document.getElementById('edov').classList.add('on'); }
function edClose() { document.getElementById('edpan').classList.remove('on'); document.getElementById('edov').classList.remove('on'); }
function edApply() { readInputs(); render(); edClose(); var sv = document.getElementById('edsaved'); sv.classList.add('show'); setTimeout(function () { sv.classList.remove('show'); }, 2500); }
function eTab(name, btn) {
    document.querySelectorAll('.edsec').forEach(function (x) { x.classList.remove('on'); });
    document.querySelectorAll('.ett').forEach(function (x) { x.classList.remove('on'); });
    document.getElementById('tab-' + name).classList.add('on');
    btn.classList.add('on');
}

function syncInputs() {
    var m = {
        en1: D.n1, en2: D.n2, emono: D.mono, etag: D.tag, ehash: D.hash, equote: D.quote, eemail: D.email,
        edate: D.date, eddate: D.ddate, ersvpdl: D.rsvpdl,
        eclbl: D.cLbl, ecdate: D.cdate, ect: D.ct, ecn: D.cn, ech: D.ch, eca: D.ca, ecd: D.cd, ecmap: D.cmap,
        erlbl: D.rLbl, erdate: D.rdate, ert: D.rt, ern: D.rn, erh: D.rh, era: D.ra, erd: D.rd, ermap: D.rmap,
        ehot: D.hot, ehcode: D.hcode, ehdisc: D.hdisc, ehdl: D.hdl, epark: D.park, eshut: D.shut,
        eregnote: D.regNote, ereglink: D.regLink, eregbtn: D.regBtn, egform: D.gform
    };
    Object.keys(m).forEach(function (id) { var el = document.getElementById(id); if (el) el.value = m[id]; });
    var chks = {
        tphotos: D.showPhotos, tcer: D.showCer, trec: D.showRec, thot: D.showHot, tdir: D.showDir,
        ttl: D.showTl, tparty: D.showParty, tgal: D.showGal, tfaq: D.showFaq, treg: D.showReg, trsvpc: D.showRsvpC, trsvpr: D.showRsvpR
    };
    Object.keys(chks).forEach(function (id) { var el = document.getElementById(id); if (el) el.checked = chks[id]; });
    D.imgs.forEach(function (url, i) { var el = document.getElementById('img' + (i + 1)); if (el) el.value = url; });
    var etl = document.getElementById('etl'); if (etl) etl.value = D.tl.map(function (t) { return t.t + ' | ' + t.e + (t.g ? '*' : ''); }).join('\n');

    // Story cards
    var se = document.getElementById('story-editor');
    if (se) se.innerHTML = D.story.map(function (s, i) { return '<div class="scc"><div class="sch" onclick="toggleSC(' + i + ')"><span class="sct">Chapter ' + (i + 1) + ': ' + s.h + '</span><span class="sctog" id="sctog' + i + '">＋</span></div><div class="scb" id="scb' + i + '"><div class="eg" style="margin-top:10px"><label class="el">Year / Location</label><input class="ei" id="scy' + i + '" value="' + s.yr + '" oninput="liveUp()"></div><div class="eg"><label class="el">Title</label><input class="ei" id="sct' + i + '" value="' + s.h + '" oninput="liveUp()"></div><div class="eg"><label class="el">Story Text</label><textarea class="ei eta" id="scx' + i + '" oninput="liveUp()">' + s.t + '</textarea></div></div></div>'; }).join('');

    // Party editor
    var pe = document.getElementById('party-editor');
    if (pe) pe.innerHTML = D.party.map(function (p, i) { return '<div class="scc"><div class="sch" onclick="togglePC(' + i + ')"><span class="sct">' + (p.name || 'Person ' + (i + 1)) + ' · ' + p.role + '</span><span class="sctog" id="pctog' + i + '">＋</span></div><div class="scb" id="pcb' + i + '"><div class="eg" style="margin-top:10px"><label class="el">Full Name</label><input class="ei" id="pcn' + i + '" value="' + p.name + '" oninput="liveUp()" placeholder="Leave blank to hide"></div><div class="eg"><label class="el">Role</label><input class="ei" id="pcr' + i + '" value="' + p.role + '" oninput="liveUp()"></div><div class="eg"><label class="el">Side</label><select class="ei" id="pcs' + i + '" oninput="liveUp()"><option value="b"' + (p.side === "b" ? " selected" : "") + '>Bridal Party</option><option value="g"' + (p.side === "g" ? " selected" : "") + '>Groom\'s Party</option></select></div><div class="eg"><label class="el">Photo URL (optional)</label><input class="ei" id="pcimg' + i + '" value="' + p.img + '" oninput="liveUp()" placeholder="https://..."></div></div></div>'; }).join('');

    // FAQ editor
    var fe = document.getElementById('faq-editor');
    if (fe) fe.innerHTML = D.faq.map(function (f, i) { return '<div class="scc"><div class="sch" onclick="toggleFC(' + i + ')"><span class="sct">Q' + (i + 1) + ': ' + (f.q.length > 30 ? f.q.substring(0, 30) + '…' : f.q) + '</span><span class="sctog" id="fctog' + i + '">＋</span></div><div class="scb" id="fcb' + i + '"><div class="eg" style="margin-top:10px"><label class="el">Question</label><input class="ei" id="fcq' + i + '" value="' + f.q + '" oninput="liveUp()" placeholder="Leave blank to hide"></div><div class="eg"><label class="el">Answer</label><textarea class="ei eta" id="fca' + i + '" oninput="liveUp()">' + f.a + '</textarea></div></div></div>'; }).join('');

    // Colors
    var rs = getComputedStyle(document.documentElement);
    function toH(c) { if (!c || c.startsWith('#')) return c || '#888'; var m = c.match(/\d+/g); if (!m) return '#888'; return '#' + m.slice(0, 3).map(function (n) { return parseInt(n).toString(16).padStart(2, '0'); }).join(''); }
    document.getElementById('cs').value = toH(rs.getPropertyValue('--p').trim());
    document.getElementById('csd').value = toH(rs.getPropertyValue('--pd').trim());
    document.getElementById('csl').value = toH(rs.getPropertyValue('--pl').trim());
    document.getElementById('csm').value = toH(rs.getPropertyValue('--pm').trim());
    document.getElementById('cg').value = toH(rs.getPropertyValue('--go').trim());
    document.getElementById('civ').value = toH(rs.getPropertyValue('--iv').trim());
}

function readInputs() {
    function v(id) { var el = document.getElementById(id); return el ? el.value : ''; }
    function c(id) { var el = document.getElementById(id); return el ? el.checked : false; }
    D.n1 = v('en1'); D.n2 = v('en2'); D.mono = v('emono'); D.tag = v('etag'); D.hash = v('ehash');
    D.quote = v('equote'); D.email = v('eemail'); D.date = v('edate'); D.ddate = v('eddate'); D.rsvpdl = v('ersvpdl');
    D.cLbl = v('eclbl'); D.cdate = v('ecdate'); D.ct = v('ect'); D.cn = v('ecn'); D.ch = v('ech'); D.ca = v('eca'); D.cd = v('ecd'); D.cmap = v('ecmap');
    D.rLbl = v('erlbl'); D.rdate = v('erdate'); D.rt = v('ert'); D.rn = v('ern'); D.rh = v('erh'); D.ra = v('era'); D.rd = v('erd'); D.rmap = v('ermap');
    D.hot = v('ehot'); D.hcode = v('ehcode'); D.hdisc = v('ehdisc'); D.hdl = v('ehdl'); D.park = v('epark'); D.shut = v('eshut');
    D.regNote = v('eregnote'); D.regLink = v('ereglink'); D.regBtn = v('eregbtn'); D.gform = v('egform');
    D.showPhotos = c('tphotos'); D.showCer = c('tcer'); D.showRec = c('trec'); D.showHot = c('thot'); D.showDir = c('tdir');
    D.showTl = c('ttl'); D.showParty = c('tparty'); D.showGal = c('tgal'); D.showFaq = c('tfaq'); D.showReg = c('treg'); D.showRsvpC = c('trsvpc'); D.showRsvpR = c('trsvpr');
    D.imgs = D.imgs.map(function (_, i) { return v('img' + (i + 1)); });
    var lines = v('etl').split('\n').filter(function (l) { return l.trim(); });
    D.tl = lines.map(function (l) { var g = l.endsWith('*'); var cl = g ? l.slice(0, -1) : l; var p = cl.split('|'); return { t: (p[0] || '').trim(), e: (p[1] || '').trim(), g: g }; });
    D.story = D.story.map(function (_, i) { return { yr: v('scy' + i) || D.story[i].yr, h: v('sct' + i) || D.story[i].h, t: v('scx' + i) || D.story[i].t }; });
    D.party = D.party.map(function (_, i) { var sel = document.getElementById('pcs' + i); return { name: v('pcn' + i), role: v('pcr' + i), side: sel ? sel.value : 'b', img: v('pcimg' + i) }; });
    D.faq = D.faq.map(function (_, i) { return { q: v('fcq' + i), a: v('fca' + i) }; });
}

function liveUp() { readInputs(); render(); }

/* Expand/collapse */
function toggleSC(i) { var b = document.getElementById('scb' + i), t = document.getElementById('sctog' + i); if (!b || !t) return; var o = b.classList.toggle('open'); t.classList.toggle('open', o); }
function togglePC(i) { var b = document.getElementById('pcb' + i), t = document.getElementById('pctog' + i); if (!b || !t) return; var o = b.classList.toggle('open'); t.classList.toggle('open', o); }
function toggleFC(i) { var b = document.getElementById('fcb' + i), t = document.getElementById('fctog' + i); if (!b || !t) return; var o = b.classList.toggle('open'); t.classList.toggle('open', o); }
function toggleFaq(i) { var a = document.getElementById('fan' + i), ic = document.getElementById('fqi' + i); if (!a || !ic) return; var o = a.classList.toggle('open'); ic.classList.toggle('open', o); ic.textContent = o ? '－' : '＋'; }

/* Colors */
function liveColors() {
    var rs = document.documentElement.style;
    rs.setProperty('--p', document.getElementById('cs').value);
    rs.setProperty('--pd', document.getElementById('csd').value);
    rs.setProperty('--pl', document.getElementById('csl').value);
    rs.setProperty('--pm', document.getElementById('csm').value);
    rs.setProperty('--go', document.getElementById('cg').value);
    rs.setProperty('--iv', document.getElementById('civ').value);
}
var PR = {
    sage: { p: '#7D9B76', pd: '#4E6B47', pl: '#A8BFA3', pm: '#EDF2EC', go: '#C9A96E', iv: '#F9F5EE' },
    blush: { p: '#C4847A', pd: '#8B4B3E', pl: '#DBA8A2', pm: '#F5E8E4', go: '#C9A96E', iv: '#FDF5F4' },
    navy: { p: '#3A5A8A', pd: '#1E2D4A', pl: '#7A9ABF', pm: '#E8EBF0', go: '#D4A843', iv: '#F5F6F9' },
    mocha: { p: '#8B6B52', pd: '#5C3D2E', pl: '#B89A82', pm: '#EDE5DC', go: '#C9A96E', iv: '#FAF5EF' },
    lavender: { p: '#8B6BB5', pd: '#5B3E8B', pl: '#B8A0D4', pm: '#EEE8F8', go: '#C9A96E', iv: '#F8F5FD' },
    dusty: { p: '#B07878', pd: '#7B5C5C', pl: '#D4A8A8', pm: '#F0EBE8', go: '#C9A96E', iv: '#FDF8F6' },
    forest: { p: '#4A7030', pd: '#2D5016', pl: '#82A860', pm: '#E5EDE2', go: '#C9A96E', iv: '#F5F8F2' },
    midnight: { p: '#4A4A8A', pd: '#1A1A3E', pl: '#8888C4', pm: '#E8E8EE', go: '#D4C060', iv: '#F6F6FA' },
    terracotta: { p: '#B06040', pd: '#7A3B2E', pl: '#D4907A', pm: '#F2EAE4', go: '#C9A96E', iv: '#FAF4EF' },
    emerald: { p: '#2E7A50', pd: '#1A4A32', pl: '#5A9A78', pm: '#E2EEE8', go: '#C9A96E', iv: '#F2F8F5' }
};
function apPr(n) {
    var p = PR[n], rs = document.documentElement.style;
    Object.keys(p).forEach(function (k) { rs.setProperty('--' + k, p[k]); });
    document.getElementById('cs').value = p.p; document.getElementById('csd').value = p.pd;
    document.getElementById('csl').value = p.pl; document.getElementById('csm').value = p.pm;
    document.getElementById('cg').value = p.go; document.getElementById('civ').value = p.iv;
}

/* Nav */
function showPg(name) {
    document.querySelectorAll('.pg').forEach(function (x) { x.classList.remove('show'); });
    document.querySelectorAll('.nav-links button').forEach(function (x) { x.classList.remove('active'); });
    var pg = document.getElementById('pg-' + name); if (pg) pg.classList.add('show');
    var nb = document.getElementById('nb-' + name); if (nb) nb.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMob() { document.getElementById('mobnav').classList.toggle('show'); }

/* RSVP */
function submitRSVP() {
    document.getElementById('rsvpform').style.display = 'none';
    document.getElementById('rsvpok').style.display = 'block';
}

/* Envelope */
var envStep = 0;
function envClick() {
    if (envStep === 0) {
        document.getElementById('envflap').classList.add('open');
        document.getElementById('envcard').classList.add('open');
        document.getElementById('env-hint').textContent = '✦ Click again to enter ✦';
        envStep = 1;
    } else {
        var env = document.getElementById('env');
        env.classList.add('gone');
        setTimeout(function () { env.style.display = 'none'; }, 750);
    }
}

/* Countdown */
function tick() {
    var w = new Date(D.date + 'T14:00:00'), diff = w - new Date();
    if (diff <= 0) { ['cdd', 'cdh', 'cdm', 'cds'].forEach(function (id) { setText(id, '0'); }); return; }
    setText('cdd', Math.floor(diff / 86400000));
    setText('cdh', String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'));
    setText('cdm', String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'));
    setText('cds', String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'));
}

/* INIT */
render();
tick();
setInterval(tick, 1000);
