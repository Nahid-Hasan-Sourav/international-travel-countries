
// 1.আমরা প্রথমে একটা loadCountries() ফাংশন তৈরি করছি ডেটা লোড করার জন্য এবং সেই ফাংশন কে কল করছি এবং url দিয়ে দিছি।

// 2.ফাংশনকে যখন কল করে আমরা url দিয়ে দিছে তখন সেটাকে fetch করছে এবং সেই ডেটা টাকে একটা display() ফাংশনের মধ্যে পাস করে দিছে।

// 3.এখন আমরা দেখছি display () ফাংশনের মধ্যে এসে ডেটার টাইপ কি দেন সে হিসেবে আমরা লুপ চালাবো যেহেতো এটা প্রথমে একটা অ্যারে দেয় তাই আমরা forEach() লুপ চালাইছি এবং সেটা কোনকিছু রিটার্ন করবে না। দেন আমরা লুপের মধ্যে একটা ডিভ ক্রিয়েট করছি তার ক্লাশ হিসেবে এড করে দিছি (.col) কে। এবং এর ভিতরে একটা card তৈরি করে তার মধ্যে ডেটাকে দেখাইছি আমরা।
// এখানে আমরা একটা বাটন ক্রিয়েট করছি এবং সেই বাটনে একটা loadCountryDetails() ফাংশন ক্রিয়েট করে তার মধ্যে প্যারামিটার হিসেবে cca2 কে পাঠাইছি।

// 4.এখন loadCountryDetails()  এই ফাংশনের মধ্যে এসে আমরা একটা ডাইনামিক url তৈরির জন্য আমাদের url টাকে fetch() করবো এবং এখানে এই যে প্যারামিটার টা ফাংশনে রিসিভ করছি সেটা থাকবে url এ অর্থ্যাৎ যে কার্ডে ক্লিক করবো সেই কার্ডের cca2 কে নিয়ে সেই কার্ডের সমস্ত ডেটা আমরা পাবো। 
// এখন এই ডেটা গুলোকে মডালের মার্ধ্যমে দেখানোর জন্য আমরা একটা মডাল তৈরি করে নিছি।


// ফাংনাল আউটপুট ডাউনামিক কার্ড জেনারেট হওয়ার পর ডাইনামিক url এর মাধ্যমে যখন যে বাটনে ক্লিক করতেছি সেই দেশের ইনপো পাচ্ছি শুধু।


// 1.আমরা প্রথমে একটা loadCountries() ফাংশন তৈরি করছি ডেটা লোড করার জন্য এবং সেই ফাংশন কে কল করছি এবং url দিয়ে দিছি।
// 2.ফাংশনকে যখন কল করে আমরা url দিয়ে দিছে তখন সেটাকে fetch করছে এবং সেই ডেটা টাকে একটা display() ফাংশনের মধ্যে পাস করে দিছে।

const loadCountries =(url)=>{
    fetch(url)
    // fetch('https://restcountries.com/v3.1/name/peru')
    .then((res)=>res.json())

    .then((data)=>display(data))
}

// step-2
// 3.এখন আমরা দেখছি display () ফাংশনের মধ্যে এসে ডেটার টাইপ কি দেন সে হিসেবে আমরা লুপ চালাবো যেহেতো এটা প্রথমে একটা অ্যারে দেয় তাই আমরা forEach() লুপ চালাইছি এবং সেটা কোনকিছু রিটার্ন করবে না। দেন আমরা লুপের মধ্যে একটা ডিভ ক্রিয়েট করছি তার ক্লাশ হিসেবে এড করে দিছি (.col) কে। এবং এর ভিতরে একটা card তৈরি করে তার মধ্যে ডেটাকে দেখাইছি আমরা।
// এখানে আমরা একটা বাটন ক্রিয়েট করছি এবং সেই বাটনে একটা loadCountryDetails() ফাংশন ক্রিয়েট করে তার মধ্যে প্যারামিটার হিসেবে cca2 কে পাঠাইছি।
const display=(countrys)=>{
    console.log("countrys : ",countrys);
   const row= document.getElementById("row");

   countrys.forEach(country=>{

    console.log("country : ",country);
    // console.log("Capital : ",country.capital[0]);

    // const obj=JSON.stringify(country);
    // const obj=country;
    // console.log("Undefined: ",obj);
    // console.log("Undefined: ",country.capital);

    const div=document.createElement("div");
    div.classList.add("col");
    div.innerHTML=`
    
    <div class="card border shadow">
    <div class="card-body">
        <h3 class="h4">Country Name: 
        <span class="text-danger h5">
           ${country.name.common}
        </span>
    </h3 >
        <h3  class="h4">Capital: 
        <span class="text-danger h5">
        
        ${country.capital ? country.capital[0] : "No Capital"}
        </span>
    </h3>
    </div>
    <div class="w-75 mx-auto">
        <button class="btn btn-primary w-50 my-2" onclick='loadCountryDetails("${country.cca2}")'  data-bs-toggle="modal" data-bs-target="#exampleModal" >Details</button>
    </div>
</div>
    
    `

    row.appendChild(div);
   })
  
   
}

// 4.এখন loadCountryDetails()  এই ফাংশনের মধ্যে এসে আমরা একটা ডাইনামিক url তৈরির জন্য আমাদের url টাকে fetch() করবো এবং এখানে এই যে প্যারামিটার টা ফাংশনে রিসিভ করছি সেটা থাকবে url এ অর্থ্যাৎ যে কার্ডে ক্লিক করবো সেই কার্ডের cca2 কে নিয়ে সেই কার্ডের সমস্ত ডেটা আমরা পাবো। 

const loadCountryDetails = (code) =>{
    console.log("cca2: " + code);
    // for(const object in objects){
    //     console.log("DetailsButton: " + object);
    // }
    // console.log("This is details btn");

    const url=`https://restcountries.com/v3.1/alpha?codes=${code}`;
    console.log("URL: " + url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => dynamicLink(data))
    
}

// এখন এই ডেটা গুলোকে মডালের মার্ধ্যমে দেখানোর জন্য আমরা একটা মডাল তৈরি করে নিছি।
const dynamicLink=(data)=>{
    
//     var obj = { first: 'someVal' };
// obj[Object.keys(obj)[0]]; //returns 'someVal'

// Object.values(obj)[0]; // returns 'someVal'

    // console.log("data :",data[0].languages);
    const languageObj=data[0].languages;
    // console.log("data :",Object.values(languageObj)[0]);

    const modalBody=document.getElementById('modal-body');

    modalBody.innerHTML = `
    
    <div class="card border bg-light">
    <img src="${data[0].flags.png}" alt="Placeholder" class="img-fluid w-50 h-50 d-block mx-auto py-2">
    <div class="card-body">
        <h3>Name : ${data[0].name.common}</h3>
        <h3>Capital :${data[0].capital[0]}</h3> </h3>
        <h3>Languages :${Object.values(languageObj)[0]}</h3>
    </div>
  </div>

    `
}
loadCountries('https://restcountries.com/v3.1/all');


// ফাংনাল আউটপুট ডাউনামিক কার্ড জেনারেট হওয়ার পর ডাইনামিক url এর মাধ্যমে যখন যে বাটনে ক্লিক করতেছি সেই দেশের ইনপো পাচ্ছি শুধু।