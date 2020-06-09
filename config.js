// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hello Miss Galaxies!!!",      
        "I'm really happy to meet you",  
        "You always make me smile",
        "You are mishoso, but",
        "You are chincha Yepoyo",
        "No mather how far or how old we are",
        "You will always be in my heart",
        "You will always be my super strong woman",
        "I will never forget you",
        "Na Saranghe",
        "My joy, my Nuna, Kamsahapnida!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Hello Miss Galaxies!!!": "./imgs/nuna.jpeg",
        "I'm really happy to meet you": "./imgs/nuna2.jpeg",
        "You always make me smile": "./imgs/nuna3.jpeg",
        "You are mishoso, but": "./imgs/nuna4.jpg",
        "You are chincha Yepoyo":"./imgs/nuna7.jpg",
        "No mather how far or how old we are":"./imgs/nuna6.jpg",
        "You will always be in my heart":"./imgs/nuna8.jpg",
        "You will always be my super strong woman":"./imgs/nuna9.jpg",
        "I will never forget you":"./imgs/nuna5.jpg",
        "Na Saranghe":"./imgs/nuna10.jpg",
        "My joy, my Nuna, Kamsahapnida!":"./imgs/nuna12.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Turn On the Lights",
        play: "let's Dance",
        bannar_coming: "Let's Decorate",
        balloons_flying: "Seems to be missing something",
        cake_fadein: "The Most Delicious Cake Ever",
        light_candle: "Light the Candle",
        wish_message: "Happy Birthday, Nunaaaa",
        story: "oh, You got a letter from Panama",
    }
};
