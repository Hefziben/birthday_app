// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "¡¡¡Hola Mi Mushaashita!!!",      
        "Conocerte has sido lo mejor que me ha pasado",  
        "Mis naves se embarcaron a tiro al saber que existías",
        "Mi catapulta de torción luchó por liberarte",
        "Y así conquistar tu tiro para traerte a mi barco rumbo a la libertad de amar",
        "Desde que llegaste mis días y noches son los más felices",
        "Eres el amor de mi día y de mi noche, de mis lunas llenas y vacias",        
        "Mi corazón te pertenece, y me gusta así. no hay otra manera de vivir que no sea amándote",
        "Te quiero Mushaa mi Mushasshota, mi muñequita",
        "Mi lechita salvaje, mi panal de miel, ¡mi tierra prometida!",
        "Mi Psicópata, ¡tuyo por siempre seré!",
    ],
    
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpeg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "¡¡¡Hola Mi Mushaashita!!!": "./imgs/mushaa.jpeg",
        "Conocerte has sido lo mejor que me ha pasado": "./imgs/mushaa_2.jpeg",
        "Mis naves se embarcaron a tiro al saber que existías": "./imgs/mushaa_3.jpeg",
        "Mi catapulta de torción luchó por liberarte": "./imgs/mushaa_4.jpeg",
        "Y así conquistar tu tiro para traerte a mi barco rumbo a la libertad de amar":"./imgs/mushaa_7.jpeg",
        "Desde que llegaste mis días y noches son los más felices":"./imgs/mushaa_6.jpeg",
        "Eres el amor de mi día y de mi noche, de mis lunas llenas y vacias":"./imgs/mushaa_8.jpeg",
        "Mi corazón te pertenece, y me gusta así. no hay otra manera de vivir que no sea amándote":"./imgs/mushaa_9.jpeg",
        "Mi lechita salvaje, mi panal de miel, ¡mi tierra prometida!":"./imgs/mushaa_5.jpeg",
        "Mi Psicópata, ¡tuyo por siempre seré!":"./imgs/mushaa_10.jpeg",
        "Te quiero Mushaa mi Mushasshota, mi muñequita":"./imgs/mushaa_12.jpeg",
        // "今天是你的生日": "./imgs/birthday.jpeg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Enciende las luces",
        play: "Vailemos",
        bannar_coming: "Decoremos",
        balloons_flying: "Parece que falta algo",
        cake_fadein: "El dulce mas delicioso",
        light_candle: "Enciende las velas",
        wish_message: "Feliz Cumpleaños Mushaaa",
        story: "Oh, Te llego una carta desde Panama",
    }
};
