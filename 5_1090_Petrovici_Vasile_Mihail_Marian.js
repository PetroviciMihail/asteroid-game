//initializare storage
//localStorage.setItem(1, "- 0");
//localStorage.setItem(2, "- 0");
//localStorage.setItem(3, "- 0");
//localStorage.setItem(4, "- 0");
//localStorage.setItem(5, "- 0");
//localStorage.clear();

var canv=document.getElementById("chenar");

var ctx= canv.getContext("2d");

var da=setInterval(redeseneaza, 20);

var asteroizi=[];
var rachete=[];
var nrRacheteCreate=0;
var nava=
{
    x: canv.width/2,
    y: canv.height/2,
    unghi: 0/180*Math.PI,
    rot:0,
    vx:0,
    vy:0,
    contactDelay:100,
    timerExplozie:0,
    vieti:3,
    regenerare:0,
    scor:0,
    racheteDisponibile:3,
    lansareRacheta: 0
}

function creeareAsteroizi(){


    for(var i=0; i<6; i++)
    {
        
        asteroizi[i]=(creeareAsteroid());
    }

}
creeareAsteroizi();
function creeareAsteroid()
{
    asteroid={
        x: 0,
        y:0,
        vx:0,
        vy:0,
        nrlovituri:0,
        r:0,
    }
         //latura pe care sa se genereze
        var l=Math.floor((Math.random()*4));
        
                if(l==0) //generez pe latura de sus
                {
                    asteroid.x=Math.floor((Math.random()*canv.width));
                    asteroid.y=0;
                    asteroid.vy=Math.floor((Math.random()*2)+1);
                    asteroid.vx=Math.floor((Math.random()*4)+(Math.random()*-4));
                    asteroid.nrlovituri=Math.floor(Math.random()*4)+1;
        
                }
                if(l==1) //generez pe latura din dreapta
                {
                    asteroid.y=Math.floor(Math.random()*canv.height);
                    asteroid.x=canv.width;
                    asteroid.vx=-Math.floor(Math.random()*2+1);
                    asteroid.vy=Math.floor((Math.random()*4)+(Math.random()*-4));
                    asteroid.nrlovituri=Math.floor(Math.random()*4)+1;
                }
                if(l==2) //generez pe latura de jos
                {
                    asteroid.x=Math.floor((Math.random()*canv.width));
                    asteroid.y=canv.height;
                    asteroid.vx=Math.floor((Math.random()*4)+(Math.random()*-4));
                    asteroid.vy=-Math.floor((Math.random()*2)+1);
                    asteroid.nrlovituri=Math.floor(Math.random()*4)+1;
                }
                if(l==3) //generez pe latura din stanga
                {
                    asteroid.x=0;
                    asteroid.y=Math.floor((Math.random()*canv.height));
                    asteroid.vx=Math.floor((Math.random()*2))+1;
                    asteroid.vy=Math.floor((Math.random()*4)+(Math.random()*-4));
                    asteroid.nrlovituri=Math.floor(Math.random()*4)+1;
                }

                   //actualizarea razei astoridului in functie de nr de lovituri necesare
                asteroid.r=asteroid.nrlovituri*7+20;
                console.log("nr asteroizi", asteroizi.length);
                for(var i=0; i<asteroizi.length; i++){

                     if((Math.hypot(asteroid.x-asteroizi[i].x, asteroid.y-asteroizi[i].y))<asteroid.r+asteroizi[i].r)
                    {
                    console.log("asteroid generat in coliziune regenerat");
                    asteroid=creeareAsteroid();}
                }

           return asteroid;
 }
  
function initializareRachete(){
    for(var i=0; i<nava.racheteDisponibile;i++)
    {
        var racheta={
            x:0,
            y:0,
            vx:0,
            vy:0,
            lansata:0
        };
        rachete[i]=(racheta);

    }
} 
initializareRachete();
function lansareRacheta(nava){
 var racheta={
     x:0,
     y:0,
     vx:0,
     vy:0,
     lansata:1
 };
    racheta.x=nava.x;
    racheta.y=nava.y;
    racheta.vx=-10*Math.cos(nava.unghi+90/180*Math.PI);
    racheta.vy=-10*Math.sin(nava.unghi+90/180*Math.PI);
    return racheta;
}

functieSalvareHighScore()
var imgNava = new Image();
imgNava.src = "media/nava.png";
var imgWidth = imgNava.width;
var imgHeight = imgNava.height;

var background = new Image();
background.src = "media/cosmos.jpg";

document.addEventListener('keypress', (event)=>{

    if(event.key==="x"){
        nava.lansareRacheta=1;
        console.log("trage");
    }
    if(event.key==" ")
    {
        console.log("restart");
        clearInterval(da);
        da=setInterval(redeseneaza, 20);
        nava.x= canv.width/2,
        nava.y= canv.height/2,
        nava.unghi= 0/180*Math.PI,
        nava.rot=0,
        nava.vx=0,
        nava.vy=0,
        nava.contactDelay=100,
        nava.timerExplozie=0,
        nava.vieti=3,
        nava.regenerare=0,
        nava.scor=0,
        nava.racheteDisponibile=3,
        nava.lansareRacheta= 0
        creeareAsteroizi();
        initializareRachete();
    }
});

document.addEventListener('keydown', (event) => {
    
    if(event.key==="z"){
        nava.rot=-5/180*Math.PI;
        console.log("a");
    }
    
    if(event.key==="c"){
        nava.rot=5/180*Math.PI;
        console.log("d");
    }
    

     //miscare sus jos stanga dreapta
     if(event.key==="ArrowLeft"){

        nava.vx=-3
        console.log("deplasare la stanga");
    }

    if(event.key==="ArrowRight"){
        nava.vx=3;
        console.log("deplasare la dreapta");
    }

    if(event.key==="ArrowUp"){
        nava.vy=-3;
        console.log("deplasare in sus");
    }

    if(event.key==="ArrowDown"){
        nava.vy=3;
        console.log("deplasare in jos");
    }

});

document.addEventListener('keyup', (event) => {
    //roteste la stanga
    if(event.key==="c"){
        nava.rot=0;
        console.log("c");}

    //roteste la dreapta    
    if(event.key==="z"){
        nava.rot=0;
        console.log("z");
    }
    
    //trage 
    if(event.key==="x"){

        console.log("trage");
    }

    //miscare sus jos stanga dreapta
    if(event.key==="ArrowLeft"){

        nava.vx=0
        console.log("deplasare la stanga");
    }

    if(event.key==="ArrowRight"){
        nava.vx=0;
        console.log("deplasare la dreapta");
    }

    if(event.key==="ArrowUp"){
        nava.vy=0;
        console.log("deplasare in sus");
    }

    if(event.key==="ArrowDown"){
        nava.vy=0;
        console.log("deplasare in jos");
    }



});



function redeseneaza()
{
    //refresh scor, vieti
    document.getElementById('h2').innerHTML = "Scor: "+nava.scor+"   Vieti: " +nava.vieti;
    //refresh la fundal 
    if (background.complete) 
    {
    ctx.drawImage(background,0,0); 
    } 
   // console.log("refresh background");
    if(nava.contactDelay>0){
   nava.contactDelay--;}
    //actualizarea poziei navei
    nava.x=nava.x+nava.vx;
    nava.y=nava.y+nava.vy;
    //daca iese inafara mapei
    if(nava.x<0)
        nava.x=canv.width;
    if(nava.y<0)
        nava.y= canv.height;
    if(nava.x>canv.width)
        nava.x=0;
    if(nava.y>canv.height)
        nava.y=0;

    //desenarea navei
    //ctx.moveTo(0,0);
    ctx.translate(nava.x, nava.y);
    ctx.rotate(nava.unghi);
    if (imgNava.complete) {
        console.log("nava desenata")
    ctx.drawImage(imgNava, -imgWidth / 2, -imgHeight / 2-12, imgWidth, imgHeight); 
    } 

    ctx.rotate(-nava.unghi);
    
    //ctx.beginPath();
    //ctx.moveTo(-20,0);
    //ctx.lineTo(nava.x-20, nava.y+20);
    //ctx.lineTo(nava.x+20, nava.y2020);
    //ctx.fill();

    ctx.translate(-nava.x, -nava.y);
    

    //centrul navei
    ctx.fillStyle = 'green'; 
    if(nava.contactDelay<1){
        ctx.fillStyle = 'red';
    }
    ctx.fillRect(nava.x-3, nava.y-3, 6,6);

    if(nava.timerExplozie>0)
    {
        nava.timerExplozie--;
        ctx.fillStyle="yellow";
        ctx.beginPath();
        ctx.arc(nava.x, nava.y, 30, 0/180*Math.PI, 360/180*Math.PI, true);
        ctx.fill();
        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(nava.x, nava.y, 20, 0/180*Math.PI, 360/180*Math.PI, true);
        ctx.fill();
    }
    //rotirea navei
    nava.unghi+=nava.rot;


    //ASTEROIZI
    //actualizarea pozitiei asteroiziilor
    for(var i=0; i<6; i++)
    {
    asteroizi[i].x=asteroizi[i].x+asteroizi[i].vx;
    asteroizi[i].y=asteroizi[i].y+asteroizi[i].vy;
           
    //daca ies inafara mapei se intorc de sus
    if(asteroizi[i].x<0)
        asteroizi[i].x=canv.width;
    if(asteroizi[i].y<0)
        asteroizi[i].y= canv.height;
    if(asteroizi[i].x>canv.width)
        asteroizi[i].x=0;
    if(asteroizi[i].y>canv.height)
        asteroizi[i].y=0;

        // daca asteroidul a fost distrus
        if(asteroizi[i].nrlovituri<1){
            asteroizi[i]=creeareAsteroid();
        }
        //actualizarea razei astoridului in functie de nr de lovituri necesare
        asteroizi[i].r=asteroizi[i].nrlovituri*7+20
       
        //desenarea asteroidului
        
        if(asteroizi[i].nrlovituri==4)
        ctx.fillStyle="red";
        if(asteroizi[i].nrlovituri==3)
        ctx.fillStyle="orange";
        if(asteroizi[i].nrlovituri==2)
        ctx.fillStyle="yellow";
        if(asteroizi[i].nrlovituri==1)
        ctx.fillStyle="green";

        ctx.beginPath();
        ctx.arc(asteroizi[i].x, asteroizi[i].y, asteroizi[i].r, 0/180*Math.PI, 360/180*Math.PI, true);
        ctx.fill();
        ctx.fillStyle="black";
        ctx.font = '20px arial';
        ctx.fillText(asteroizi[i].nrlovituri, asteroizi[i].x-5, asteroizi[i].y+5)
       //console.log("asteroizi");
        

    }

    //Lansare RACHETE
    //console.log(nava.racheteDisponibile, "rachete disponibile")
    if(nava.lansareRacheta==1&& nava.racheteDisponibile>0){
        nava.lansareRacheta=0;
        nava.racheteDisponibile--;
        var racheta= lansareRacheta(nava);
        for(var i=0; i<3; i++)
        {
            console.log("racheta atribuita", i);
            if(rachete[i].lansata==0){
            rachete[i]=racheta;
            i=4;}
        }
        
    }
    //console.log("nr rachete"+rachete.length)
    //console.log("nr asterozi"+asteroizi.length);
    //actualizare rachete in spatiu
    for(var i=0; i<3;i++)
    {
        if (rachete[i].lansata==1)
        {
            rachete[i].x+=rachete[i].vx;
            rachete[i].y+=rachete[i].vy;
            
            //console.log(nrRacheteCreate, "create ", i," desenata", rachete[i].x, rachete[i].y);
             //desenare RACHETA
            ctx.fillStyle="red";
            ctx.strokeStyle="red"
            ctx.beginPath();
            ctx.arc(rachete[i].x, rachete[i].y, 10, 0/180*Math.PI, 360/180*Math.PI, true);
            ctx.fill();
            ctx.stroke();

            //daca iese din canvas vom mai putea trage o racheta
            if(rachete[i].x<0)
             {rachete[i].lansata=0;
                nava.racheteDisponibile++;}
            if(rachete[i].y<0)
            {rachete[i].lansata=0;
                nava.racheteDisponibile++;}
            if(rachete[i].x>canv.width)
            {rachete[i].lansata=0;
                nava.racheteDisponibile++;}
            if(rachete[i].y>canv.height)
            {rachete[i].lansata=0;
            nava.racheteDisponibile++;}
        }
    }

   


    //COLIZIUNI nava cu asteroizi
    for(var i=0; i<6; i++)
    {
       
        if((Math.hypot(nava.x-asteroizi[i].x, nava.y-asteroizi[i].y))<25+asteroizi[i].r&&nava.contactDelay<1)
        {
            asteroizi[i].nrlovituri--;
            nava.contactDelay=100;
            nava.timerExplozie=50;
            nava.vieti--;
            if(asteroizi[i].nrlovituri==0){
                nava.scor+=100;
                nava.regenerare++;
                }

            
        }

    }

    //coliziune asteroid cu asteroid
    for(var i=0; i<6; i++)
    {
       for(var j=i+1; j<6;j++){
        if((Math.hypot(asteroizi[j].x-asteroizi[i].x, asteroizi[j].y-asteroizi[i].y))<asteroizi[j].r+asteroizi[i].r)
        {
            console.log("coliziune asteroizi", i," cu ", j);
            asteroizi[j].vx=-asteroizi[j].vx;
            asteroizi[j].vy=-asteroizi[j].vy;
            asteroizi[i].vx=-asteroizi[i].vx;
            asteroizi[i].vy=-asteroizi[i].vy;
       }

    }
    }

    //coliziuni racheta-asteroid
    for(var i=0; i<6; i++)
    {
       for(var j=0; j<3;j++)
        if(rachete[j].lansata&&(Math.hypot(rachete[j].x-asteroizi[i].x, rachete[j].y-asteroizi[i].y))<5+asteroizi[i].r)
        {
            asteroizi[i].nrlovituri--;
            rachete[j].lansata=0;
            nava.racheteDisponibile++;
            if(asteroizi[i].nrlovituri==0){
            nava.scor+=100;
            nava.regenerare++;
            }
            
        }



    }
    

    if(nava.regenerare>9)
    {
        nava.vieti++;
        nava.regenerare=0;
    }

    if(nava.vieti<0)
    {
            clearInterval(da);
            ctx.fillStyle="gray";
            ctx.textAlign = "center";
            ctx.font = '50px arial';
            ctx.fillText('GAME OVER', canv.width/2, canv.height/2);


            ctx.fillStyle="gray";
            ctx.font = '40px arial';
            ctx.fillText('SCORE: '+nava.scor, canv.width/2, canv.height/2+50);
            document.getElementById('h2').innerHTML = "Scor: "+nava.scor+"   Vieti: " +(nava.vieti+1);
            
            ctx.fillStyle="gray";
            ctx.font = '40px arial';
            
            ctx.fillText('Press SPACEBAR to RESTART', canv.width/2, canv.height-50);

            functieSalvareHighScore();
    }
    







}

function functieSalvareHighScore()
{

    var scoruri=[]
    scoruri[1]=(localStorage.getItem('1'));
    scoruri[2]=(localStorage.getItem('2'));
    scoruri[3]=(localStorage.getItem('3'));
    scoruri[4]=(localStorage.getItem('4'));
    scoruri[5]=(localStorage.getItem('5'));

    var valori=[];
    var nume=[];
    console.log("intial");
    for(var i=1; i<=5; i++)
    {
        if(scoruri[i]!=null){
        var words= scoruri[i].split(" ");
        valori[i]= words[1];
        nume[i]=words[0];
        }
        else {
            valori[i]= 0;
            nume[i]="-";
        }
        console.log("scorul de pe locul "+i+" "+localStorage.getItem(i));

    }
    for(var i=1; i<=5;i++)
    {
        console.log (nava.scor+">"+valori[i]);
        if (nava.scor>=valori[i])
        {
            for(j=5; j>i; j--)
            {
                valori[j]=valori[j-1];
                nume[j]=nume[j-1];
            }
            nume[i]=document.getElementById("fname").value;
            valori[i]= nava.scor;
            i=10;
        }
    }

    for(var i=1; i<=5;i++)
    {
        localStorage.setItem(i, nume[i]+" "+valori[i]);
        console.log("scorul de pe locul "+i+" "+localStorage.getItem(i));
        var idp="loc"+i;
        document.getElementById(idp).innerHTML = nume[i]+" " +valori[i];
    }

}


