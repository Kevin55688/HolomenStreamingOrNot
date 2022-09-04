    //功能--判斷是否開台並標示紅點及建立超連結
    function getStream (channelId, googleKey, ToWhom, WhosSign) {
        //取得完整url
        const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelId + '&eventType=live&type=video&key=' + googleKey;
        //串接API
        fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                const stream = document.querySelector(ToWhom);
                const sign = document.querySelector(WhosSign)
                //判斷有沒有在開直播
                if (data.items.length > 0) {
                    //取得直播影片ID並將連錄嵌入a
                    stream.setAttribute('href' ,'https://www.youtube.com/watch?v=' +  data.items[0].id.videoId);
                    //亮紅燈
                    sign.style.backgroundColor = 'red';
                    sign.style.transform = 'scale(2)';
                    sign.style.animation = 'sparkling 1s alternate infinite';
                    console.log(data)
                } 
            })
        })
        .catch(function (err) {
            console.log('error')
        }); 
    };

    
//GOOGLE的API金鑰
const googleApi = {
    'EN1' : 'AIzaSyCmCFAp1rmZlwRLrCr8d_QkX0j-QpWsvOk',
    'EN2' : 'AIzaSyAChppsy9-s_ud-rc8Pn8ej8nwqMGJ-MfE',
    'JP0' : 'AIzaSyBiOMu4DRA7lqWtleRqaigSPcH0EYFmCXs',
    'JP1' : 'AIzaSyBiOMu4DRA7lqWtleRqaigSPcH0EYFmCXs',
    'JP2' : 'AIzaSyBqu-CM2JU-YrrJtOAsi4gcQRALZXJKvxA',
    'Gamers' : 'AIzaSyDmGbWmOOqm1FwBdWF7TP24aEa1iE-skmY',
    'JP3' : 'AIzaSyBSDrasCdhjRUxzpipbupaKVoVJM7yvOVs',
    'JP4' : 'AIzaSyAKENmjLGOWMAA0YKjAAC1_qXTvVQe9RFM',
    'JP5' : 'AIzaSyDz3-SH3C8f-Dw3Wr_KGYRHspQVx-Jyp5Q',
    'JP6' : 'AIzaSyCapNHEwazz4Rp1nHnNJKpia5uYuJp_fto',
    'ID1' : 'AIzaSyCmsiILuFXagMppZ2Qc63XCiTN91BEpnww',
    'ID2and3' : 'AIzaSyDAQz3TbQdp2k2UTryS_9CrmrcZdqBqSOk',

}



//getStream所需資料
const getIdol = {
// EN1
    'Ame'           : {'idolChannel':'UCyl1z3jo3XHR1riLFKG5UAg' , 'ToLink' : '.ToAme' , 'getSign': '.signAme'},
    'Calli'         : {'idolChannel':'UCL_qhgtOy0dy1Agp8vkySQg' , 'ToLink' : '.ToCalli' , 'getSign': '.signCalli'},
    'Gura'          : {'idolChannel':'UCoSrY_IQQVpmIRZ9Xf-y93g' , 'ToLink' : '.ToGura' , 'getSign': '.signGura'},
    'Ina'           : {'idolChannel':'UCMwGHR0BTZuLsmjY_NT5Pwg' , 'ToLink' : '.ToIna' , 'getSign': '.signIna'},
    'Kiara'         : {'idolChannel':'UCHsx4Hqa-1ORjQTh9TYDhww' , 'ToLink' : '.ToKiara' , 'getSign': '.signKiara'},
// EN2
    'Bae'           : {'idolChannel':'UCgmPnx-EEeOrZSg5Tiw7ZRQ' , 'ToLink' : '.ToBae' , 'getSign': '.signBae'},
    'Fauna'         : {'idolChannel':'UCO_aKKYxn4tvrqPjcTzZ6EQ' , 'ToLink' : '.ToFauna' , 'getSign': '.signFauna'},
    'Kronii'        : {'idolChannel':'UCmbs8T6MWqUHP1tIQvSgKrg' , 'ToLink' : '.ToKronii' , 'getSign': '.signKronii'},
    'Mumei'         : {'idolChannel':'UC3n5uGu18FoCy23ggWWp8tA' , 'ToLink' : '.ToMumei' , 'getSign': '.signMumei'},
    'Irys'          : {'idolChannel':'UC8rcEBzJSleTkf_-agPM20g' , 'ToLink' : '.ToIrys' , 'getSign': '.signIrys'},
//JP0
    '時乃空'         : {'idolChannel':'UCp6993wxpyDPHUpavwDFqgg' , 'ToLink' : '.To時乃空' , 'getSign': '.sign時乃空'},
    '星街慧星'       : {'idolChannel':'UC5CwaMl1eIgY8h02uZw7u8A' , 'ToLink' : '.To星街慧星' , 'get星街慧星': '.sign星街慧星'},
    '櫻巫女'         : {'idolChannel':'UC-hM6YJuNYVAmUWxeIr9FeA' , 'ToLink' : '.To櫻巫女' , 'getSign': '.sign櫻巫女'},
    '蘿蔔子'         : {'idolChannel':'UCDqI2jOz0weumE8s7paEk6g' , 'ToLink' : '.To蘿蔔子' , 'getSign': '.sign蘿蔔子'},
    'AZKi'          : {'idolChannel':'UC0TXe_LYZ4scaW2XMyi5_kw' , 'ToLink' : '.ToAZKi' , 'getSign': '.signAZKi'},
// JP1
    '夜空梅露'       : {'idolChannel':'UCD8HOxPs4Xvsm8H0ZxXGiBw' , 'ToLink' : '.To夜空梅露' , 'getSign': '.sign夜空梅露'},
    '白上吹雪'       : {'idolChannel':'UCdn5BQ06XqgXoAxIhbqw5Rg' , 'ToLink' : '.To白上吹雪' , 'getSign': '.sign白上吹雪'},
    '亞綺·羅森塔爾'   : {'idolChannel':'UCFTLzh12_nrtzqBPsTCqenA' , 'ToLink' : '.To亞綺·羅森塔爾' , 'getSign': '.sign亞綺·羅森塔爾'},
    '夏色祭'         : {'idolChannel':'UCQ0UDLQCjY0rmuxCDE38FGg' , 'ToLink' : '.To夏色祭' , 'getSign': '.sign夏色祭'},
    '赤井心'         : {'idolChannel':'UC1CfXB_kRs3C-zaeTG3oGyg' , 'ToLink' : '.To赤井心' , 'getSign': '.sign赤井心'},
// JP2
    '湊阿庫婭'       : {'idolChannel':'UC1opHUrw8rvnsadT-iGp7Cg' , 'ToLink' : '.To湊阿庫婭' , 'getSign': '.sign湊阿庫婭'},
    '紫咲詩音'       : {'idolChannel':'UCXTpFs_3PqI41qX2d9tL2Rw' , 'ToLink' : '.To紫咲詩音' , 'getSign': '.sign紫咲詩音'},
    '百鬼綾目'       : {'idolChannel':'UC7fk0CB07ly8oSl0aqKkqFg' , 'ToLink' : '.To百鬼綾目' , 'getSign': '.sign百鬼綾目'},
    '癒月巧可'       : {'idolChannel':'UC1suqwovbL1kzsoaZgFZLKg' , 'ToLink' : '.To癒月巧可' , 'getSign': '.sign癒月巧可'},
    '大空昴'         : {'idolChannel':'UCvzGlP9oQwU--Y0r9id_jnA' , 'ToLink' : '.To大空昴' , 'getSign': '.sign大空昴'},
//GAMERS
    '大神澪'         : {'idolChannel':'UCp-5t9SrOQwXMU7iIjQfARg' , 'ToLink' : '.To大神澪' , 'getSign': '.sign大神澪'},
    '貓又小粥'       : {'idolChannel':'UCvaTdHTWBGv3MKj3KVqJVCw' , 'ToLink' : '.To貓又小粥' , 'getSign': '.sign貓又小粥'},
    '戌神沁音'       : {'idolChannel':'UChAnqc_AY5_I3Px5dig3X1Q' , 'ToLink' : '.To戌神沁音' , 'getSign': '.sign戌神沁音'},
// JP3
'兔田佩克拉'         : {'idolChannel':'UC1DCedRgGHBdm81E1llLhOQ' , 'ToLink' : '.To兔田佩克拉' , 'getSign': '.sign兔田佩克拉'},
'不知火芙蕾雅'       : {'idolChannel':'UCvInZx9h3jC2JzsIzoOebWg' , 'ToLink' : '.To不知火芙蕾雅' , 'getSign': '.sign不知火芙蕾雅'},
'白銀諾艾爾'         : {'idolChannel':'UCdyqAaZDKHXg4Ahi7VENThQ' , 'ToLink' : '.To白銀諾艾爾' , 'getSign': '.sign白銀諾艾爾'},
'寶鐘瑪琳'           : {'idolChannel':'UCCzUftO8KOVkV4wQG1vkUvg' , 'ToLink' : '.To寶鐘瑪琳' , 'getSign': '.sign寶鐘瑪琳'},
// JP4
'天音彼方'           : {'idolChannel':'UCZlDXzGoo7d44bwdNObFacg' , 'ToLink' : '.To天音彼方' , 'getSign': '.sign天音彼方'},
'角卷綿芽'           : {'idolChannel':'UCqm3BQLlJfvkTsX_hvm0UmA' , 'ToLink' : '.To角卷綿芽' , 'getSign': '.sign角卷綿芽'},
'常闇永遠'           : {'idolChannel':'UC1uv2Oq6kNxgATlCiez59hw' , 'ToLink' : '.To常闇永遠' , 'getSign': '.sign常闇永遠'},
'姬森璐娜'           : {'idolChannel':'UCa9Y57gfeY0Zro_noHRVrnw' , 'ToLink' : '.To姬森璐娜' , 'getSign': '.sign姬森璐娜'},
// JP5
'雪花菈米'           : {'idolChannel':'UCFKOVgVbGmX65RxO3EtH3iw' , 'ToLink' : '.To雪花菈米' , 'getSign': '.sign雪花菈米'},
'桃鈴音音'           : {'idolChannel':'UCAWSyEs_Io8MtpY3m-zqILA' , 'ToLink' : '.To桃鈴音音' , 'getSign': '.sign桃鈴音音'},
'獅白牡丹'           : {'idolChannel':'UCUKD-uaobj9jiqB-VXt71mA' , 'ToLink' : '.To獅白牡丹' , 'getSign': '.sign獅白牡丹'},
'尾丸波爾卡'         : {'idolChannel':'UCK9V2B22uJYu3N7eR_BT9QA' , 'ToLink' : '.To尾丸波爾卡' , 'getSign': '.sign尾丸波爾卡'},
// JP6
'拉普拉斯·達克尼斯'   : {'idolChannel':'UCENwRMx5Yh42zWpzURebzTw' , 'ToLink' : '.To拉普拉斯·達克尼斯' , 'getSign': '.sign拉普拉斯·達克尼斯'},
'鷹嶺琉衣'           : {'idolChannel':'UCs9_O1tRPMQTHQ-N_L6FU2g' , 'ToLink' : '.To鷹嶺琉衣' , 'getSign': '.sign鷹嶺琉衣'},
'博衣小夜璃'         : {'idolChannel':'UC6eWCld0KwmyHFbAqK3V-Rw' , 'ToLink' : '.To博衣小夜璃' , 'getSign': '.sign博衣小夜璃'},
'沙花叉克蘿耶'       : {'idolChannel':'UCIBY1ollUsauvVi4hW4cumw' , 'ToLink' : '.To沙花叉克蘿耶' , 'getSign': '.sign沙花叉克蘿耶'},
'風真伊呂波'         : {'idolChannel':'UC_vMYWcDjmfdpH6r4TTn1MQ' , 'ToLink' : '.To風真伊呂波' , 'getSign': '.sign風真伊呂波'},
//ID1
'Risu'              : {'idolChannel':'UCp-UCOyYb1c43VlX9rc_lT6NKQw' , 'ToLink' : '.ToRisu' , 'getSign': '.signRisu'},
'Moona'             : {'idolChannel':'UCP0BspO_AMEe3aQqqpo89Dg' , 'ToLink' : '.ToMoona' , 'getSign': '.signMoona'},
'lofi'              : {'idolChannel':'UCAoy6rzhSf4ydcYjJw3WoVg' , 'ToLink' : '.Tolofi' , 'getSign': '.signlofi'},
//ID2
'Ollie'             : {'idolChannel':'UCYz_5n-uDuChHtLo7My1HnQ' , 'ToLink' : '.ToOllie' , 'getSign': '.signOllie'},
'Anya'              : {'idolChannel':'UC727SQYUvx5pDDGQpTICNWg' , 'ToLink' : '.ToAnya' , 'getSign': '.signAnya'},
'Reine'             : {'idolChannel':'UChgTyjG-pdNvxxhdsXfHQ5Q' , 'ToLink' : '.ToReine' , 'getSign': '.signReine'},
//ID3
'Zeta'              : {'idolChannel':'UCTvHWSfBZgtxE4sILOaurIQ' , 'ToLink' : '.ToZeta' , 'getSign': '.signZeta'},
'Kaela'             : {'idolChannel':'UCZLZ8Jjx_RN2CXloOmgTHVg' , 'ToLink' : '.ToKaela' , 'getSign': '.signKaela'},
'Kobo'              : {'idolChannel':'UCjLEmnpCNeisMxy134KPwWw' , 'ToLink' : '.ToKobo' , 'getSign': '.signKobo'},
}

getStream (getIdol.Ame.idolChannel , googleApi.EN1, getIdol.Ame.ToLink, getIdol.Ame.getSign);
getStream (getIdol.Calli.idolChannel , googleApi.EN1, getIdol.Calli.ToLink, getIdol.Calli.getSign);
getStream (getIdol.Gura.idolChannel , googleApi.EN1, getIdol.Gura.ToLink, getIdol.Gura.getSign);
getStream (getIdol.Ina.idolChannel , googleApi.EN1, getIdol.Ina.ToLink, getIdol.Ina.getSign);
getStream (getIdol.Kiara.idolChannel , googleApi.EN1, getIdol.Kiara.ToLink, getIdol.Kiara.getSign);

getStream (getIdol.Bae.idolChannel , googleApi.EN2, getIdol.Bae.ToLink, getIdol.Bae.getSign);
getStream (getIdol.Fauna.idolChannel , googleApi.EN2, getIdol.Fauna.ToLink, getIdol.Fauna.getSign);
getStream (getIdol.Kronii.idolChannel , googleApi.EN2, getIdol.Kronii.ToLink, getIdol.Kronii.getSign);
getStream (getIdol.Mumei.idolChannel , googleApi.EN2, getIdol.Mumei.ToLink, getIdol.Mumei.getSign);
getStream (getIdol.Irys.idolChannel , googleApi.EN2, getIdol.Irys.ToLink, getIdol.Irys.getSign);


getStream (getIdol.時乃空.idolChannel , googleApi.JP0, getIdol.時乃空.ToLink, getIdol.時乃空.getSign);
getStream (getIdol.星街慧星.idolChannel , googleApi.JP0, getIdol.星街慧星.ToLink, getIdol.星街慧星.getSign);
getStream (getIdol.櫻巫女.idolChannel , googleApi.JP0, getIdol.櫻巫女.ToLink, getIdol.櫻巫女.getSign);
getStream (getIdol.蘿蔔子.idolChannel , googleApi.JP0, getIdol.蘿蔔子.ToLink, getIdol.蘿蔔子.getSign);
getStream (getIdol.AZKi.idolChannel , googleApi.JP0, getIdol.AZKi.ToLink, getIdol.AZKi.getSign);

getStream (getIdol.夜空梅露.idolChannel , googleApi.JP1, getIdol.夜空梅露.ToLink, getIdol.夜空梅露.getSign);
getStream (getIdol.白上吹雪.idolChannel , googleApi.JP1, getIdol.白上吹雪.ToLink, getIdol.白上吹雪.getSign);
getStream (getIdol.亞綺·羅森塔爾.idolChannel , googleApi.JP1, getIdol.亞綺·羅森塔爾.ToLink, getIdol.亞綺·羅森塔爾.getSign);
getStream (getIdol.夏色祭.idolChannel , googleApi.JP1, getIdol.夏色祭.ToLink, getIdol.夏色祭.getSign);
getStream (getIdol.赤井心.idolChannel , googleApi.JP1, getIdol.赤井心.ToLink, getIdol.赤井心.getSign);

getStream (getIdol.湊阿庫婭.idolChannel , googleApi.JP2, getIdol.湊阿庫婭.ToLink, getIdol.湊阿庫婭.getSign);
getStream (getIdol.紫咲詩音.idolChannel , googleApi.JP2, getIdol.紫咲詩音.ToLink, getIdol.紫咲詩音.getSign);
getStream (getIdol.百鬼綾目.idolChannel , googleApi.JP2, getIdol.百鬼綾目.ToLink, getIdol.百鬼綾目.getSign);
getStream (getIdol.癒月巧可.idolChannel , googleApi.JP2, getIdol.癒月巧可.ToLink, getIdol.癒月巧可.getSign);
getStream (getIdol.大空昴.idolChannel , googleApi.JP2, getIdol.大空昴.ToLink, getIdol.大空昴.getSign);

getStream (getIdol.大神澪.idolChannel , googleApi.Gamers, getIdol.大神澪.ToLink, getIdol.大神澪.getSign);
getStream (getIdol.貓又小粥.idolChannel , googleApi.Gamers, getIdol.貓又小粥.ToLink, getIdol.貓又小粥.getSign);
getStream (getIdol.戌神沁音.idolChannel , googleApi.Gamers, getIdol.戌神沁音.ToLink, getIdol.戌神沁音.getSign);

getStream (getIdol.兔田佩克拉.idolChannel , googleApi.JP3, getIdol.兔田佩克拉.ToLink, getIdol.兔田佩克拉.getSign);
getStream (getIdol.不知火芙蕾雅.idolChannel , googleApi.JP3, getIdol.不知火芙蕾雅.ToLink, getIdol.不知火芙蕾雅.getSign);
getStream (getIdol.白銀諾艾爾.idolChannel , googleApi.JP3, getIdol.白銀諾艾爾.ToLink, getIdol.白銀諾艾爾.getSign);
getStream (getIdol.寶鐘瑪琳.idolChannel , googleApi.JP3, getIdol.寶鐘瑪琳.ToLink, getIdol.寶鐘瑪琳.getSign);

getStream (getIdol.天音彼方.idolChannel , googleApi.JP4, getIdol.天音彼方.ToLink, getIdol.天音彼方.getSign);
getStream (getIdol.角卷綿芽.idolChannel , googleApi.JP4, getIdol.角卷綿芽.ToLink, getIdol.角卷綿芽.getSign);
getStream (getIdol.常闇永遠.idolChannel , googleApi.JP4, getIdol.常闇永遠.ToLink, getIdol.常闇永遠.getSign);
getStream (getIdol.姬森璐娜.idolChannel , googleApi.JP4, getIdol.姬森璐娜.ToLink, getIdol.姬森璐娜.getSign);

getStream (getIdol.雪花菈米.idolChannel , googleApi.JP5, getIdol.雪花菈米.ToLink, getIdol.雪花菈米.getSign);
getStream (getIdol.桃鈴音音.idolChannel , googleApi.JP5, getIdol.桃鈴音音.ToLink, getIdol.桃鈴音音.getSign);
getStream (getIdol.獅白牡丹.idolChannel , googleApi.JP5, getIdol.獅白牡丹.ToLink, getIdol.獅白牡丹.getSign);
getStream (getIdol.尾丸波爾卡.idolChannel , googleApi.JP5, getIdol.尾丸波爾卡.ToLink, getIdol.尾丸波爾卡.getSign);

getStream (getIdol.拉普拉斯·達克尼斯.idolChannel , googleApi.JP6, getIdol.拉普拉斯·達克尼斯.ToLink, getIdol.拉普拉斯·達克尼斯.getSign);
getStream (getIdol.鷹嶺琉衣.idolChannel , googleApi.JP6, getIdol.鷹嶺琉衣.ToLink, getIdol.鷹嶺琉衣.getSign);
getStream (getIdol.博衣小夜璃.idolChannel , googleApi.JP6, getIdol.博衣小夜璃.ToLink, getIdol.博衣小夜璃.getSign);
getStream (getIdol.沙花叉克蘿耶.idolChannel , googleApi.JP6, getIdol.沙花叉克蘿耶.ToLink, getIdol.沙花叉克蘿耶.getSign);
getStream (getIdol.風真伊呂波.idolChannel , googleApi.JP6, getIdol.風真伊呂波.ToLink, getIdol.風真伊呂波.getSign);

getStream (getIdol.Risu.idolChannel , googleApi.ID1, getIdol.Risu.ToLink, getIdol.Risu.getSign);
getStream (getIdol.Moona.idolChannel , googleApi.ID1, getIdol.Moona.ToLink, getIdol.Moona.getSign);
getStream (getIdol.lofi.idolChannel , googleApi.ID1, getIdol.lofi.ToLink, getIdol.lofi.getSign);

getStream (getIdol.Ollie.idolChannel , googleApi.ID2and3, getIdol.Ollie.ToLink, getIdol.Ollie.getSign);
getStream (getIdol.Anya.idolChannel , googleApi.ID2and3, getIdol.Anya.ToLink, getIdol.Anya.getSign);
getStream (getIdol.Reine.idolChannel , googleApi.ID2and3, getIdol.Reine.ToLink, getIdol.Reine.getSign);

getStream (getIdol.Zeta.idolChannel , googleApi.ID2and3, getIdol.Zeta.ToLink, getIdol.Zeta.getSign);
getStream (getIdol.Kaela.idolChannel , googleApi.ID2and3, getIdol.Kaela.ToLink, getIdol.Kaela.getSign);
getStream (getIdol.Kobo.idolChannel , googleApi.ID2and3, getIdol.Kobo.ToLink, getIdol.Kobo.getSign);

