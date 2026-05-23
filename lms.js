function openTeacherPanel(){

const pass = prompt("กรอกรหัสครู");

if(pass !== "9999"){

alert("❌ รหัสไม่ถูกต้อง");
return;

}

document.getElementById("teacherPanel").style.display = "block";

loadTeacherData();

}

function closeTeacherPanel(){

document.getElementById("teacherPanel").style.display = "none";

}

function loadTeacherData(){

const list =
document.getElementById("teacherList");

let history =
JSON.parse(localStorage.getItem("attendance")) || [];

if(history.length === 0){

list.innerHTML = `
<div class="glass p-10 rounded-3xl text-center text-2xl">
ยังไม่มีนักเรียนเข้าเรียน
</div>
`;

return;

}

list.innerHTML = "";

history.reverse();

history.forEach(item=>{

list.innerHTML += `

<div class="glass rounded-[30px] p-6 mb-5">

<div class="grid lg:grid-cols-4 gap-5">

<div>
<p class="text-gray-400">👨‍🎓 นักเรียน</p>
<h2 class="text-2xl font-black text-yellow-300">
${item.student}
</h2>
</div>

<div>
<p class="text-gray-400">📚 วิชา</p>
<h2 class="text-2xl font-black text-green-300">
${item.subject}
</h2>
</div>

<div>
<p class="text-gray-400">📅 วันที่</p>
<h2 class="text-2xl font-black text-blue-300">
${item.date}
</h2>
</div>

<div>
<p class="text-gray-400">⏰ เวลา</p>
<h2 class="text-2xl font-black text-pink-300">
${item.time}
</h2>
</div>

</div>

</div>

`;

});

}