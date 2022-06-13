function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OJXCK1Cic/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        img = document.getElementById('listening');
        if(results == roar){
            document.getElementById('listeningimage').innerHTML = 'https://media.istockphoto.com/photos/tiger-at-the-zoo-picture-id488760057?k=6&m=488760057&s=612x612&w=0&h=Q3eyTKOlugIssqh9Clu2yW4SZ19CY5UgdmHNGMUW1kY=';
        } else if (results == cluck){
            document.getElementById('listeningimage').innerHTML = 'https://www.bing.com/images/search?view=detailV2&ccid=LL9simEM&id=AE94C9B06F4DEE135215FF38B986B56C75901B38&thid=OIP.LL9simEMS9ROZEqIEHKqNwHaEB&mediaurl=https%3a%2f%2fpetshoods.com%2fwp-content%2fuploads%2f2020%2f11%2fAppearance.jpg&exph=446&expw=820&q=chicken&simid=608047376668713865&FORM=IRPRST&ck=ED7DC76EADC75F0AD9CE4E3DD4158927&selectedIndex=41';
        } else if (results == bark){
            document.getElementById('listeningimage').innerHTML = 'https://www.bing.com/images/search?view=detailV2&ccid=1KrEd3Pd&id=B4957FC4AD0E2425035E29AA47E21CF8CF65352B&thid=OIP.1KrEd3PdKjINCmA3Vm5xrgHaE2&mediaurl=https%3a%2f%2fwww.thesprucepets.com%2fthmb%2flIRYTymFwujCVbg4UbxAOyWwQ_s%3d%2f5064x3315%2ffilters%3afill(auto%2c1)%2fcanaan-dog--lying-down-110056364-5c44fecac9e77c0001a2bf1c.jpg&exph=3315&expw=5064&q=dog&simid=608026498826132773&FORM=IRPRST&ck=114EFA6D5325C28E26CBCAD57BFC7AC2&selectedIndex=9';
        } else if(results == meow){
            document.getElementById('listeningimage').innerHTML = 'https://www.bing.com/images/search?view=detailV2&ccid=A8qu%2fXSD&id=40A7E29B4027C9A158B605FFDEC5D2D1BADD9B0A&thid=OIP.A8qu_XSDObdyU101g9AFwgHaE7&mediaurl=https%3a%2f%2fbestpetsvet.com%2fwp-content%2fuploads%2f2019%2f02%2fcat-2146089_1280.jpg&exph=853&expw=1280&q=cat&simid=608052852751270494&FORM=IRPRST&ck=9BCDDBC04B1F64107A613522CA104320&selectedIndex=3';
        } else{
            document.getElementById('listeningimage').innerHTML = 'https://www.bing.com/th?id=OIP.430gz-NAOcerokPETjGgZgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';
        }
    }
}