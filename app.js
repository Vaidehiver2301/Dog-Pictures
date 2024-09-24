let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async ()=>{
    let link = await getImage();
    console.log(link);
    let img=document.querySelector("img");
    img.setAttribute("src",link);
});
async function getImage(){
        try{
            let res= await axios.get(url2);
            return res.data.message;
        } catch(e){
            console.log(`ERROR: ${e}`);
            return "No image found";
        }
    }