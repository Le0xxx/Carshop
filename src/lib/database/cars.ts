
export const dilers: Array<Diler> = [
    {
        "name": "Г.Москва",
        "photo": "https://i.ytimg.com/vi/HRvR5LIIMLw/maxresdefault.jpg",
        "enName": null,
        "url":"https://lexus-i.ru/?utm_source=google_maps&utm_medium=other&utm_campaign=izm"
    },
    {
        "name": "Г.Сургут",
        "photo": "https://avatars.mds.yandex.net/get-altay/6506385/2a0000018424a6e1e2e01c407bf949c23c54/orig",
        "enName": null,
        "url":"https://vmsurgut-skoda.ru/"
    },
    {
        "name": "Г.Тамбов",
        "photo": "https://a.d-cd.net/ddda4b2s-960.jpg",
        "enName": null,
        "url":"https://toyota-tambov.ru/"
    },
    {
        "name": "Г.Самара",
        "photo": "https://static.sobaka.ru/images/image/01/02/86/09/_normal.jpg",
        "enName": null,
        "url":"https://samara.lada.ru/?dealer=1299"
    },
    {
        "name": "Г.Тюмень",
        "photo": "https://avatars.mds.yandex.net/get-altay/1525683/2a0000016bf909a77909b3dd4d0bcbf878e6/XXL_height",
        "enName": null,
        "url":"https://mb-asterion.ru/"
    },
    {
        "name": "Г.Краснодар",
        "photo": "https://static.tildacdn.com/tild6239-3963-4661-b831-396633393466/photo.jpg",
        "enName": null,
        "url":"https://krasnodar.service-keyauto.ru/?utm_medium=maps&utm_source=g-maps_none_krd-s_sever_vw-kom_service"
    }
]
export const cars:Array<Cars> = [
    {
        "name": "Volkswagen Polo, 2020",
        "price": "1 500 000 рублей",
        "photo":"https://carzona.ru/sites/default/files/car-images/6398503-48029.jpg"
    },

    {
        "name": "Toyota Camry, 2015",
        "price": "2 000 000 рублей",
        "photo":"https://www.coches.com/fotos_historicas/toyota/Camry-SE-2015/toyota_camry-se-2014_r4.jpg"
    },
    {
        "name": "Nissan X-Trail III, 2018",
        "price": "2 300 000 рублей",
        "photo":"https://a.d-cd.net/ySyKIdy4KVhzFkTP6F9RTl7hpa4-1920.jpg"
    },
    {
        "name": "Lexus NX 200, 2015",
        "price": "2 800 000 рублей",
        "photo":"https://627400.ru/wp-content/uploads/9/1/c/91c8b9fbd20d1ff30dc41705bb09746d.jpeg"
    },
    {
        "name": "Opel Mokka, 2015",
        "price": "1 400 000 рублей",
        "photo":"https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/990/50a82ee25/76bd2ad114c0.jpg"
    },
    {
        "name": "Changan CS55PLUS, 2023",
        "price": "2 500 000 рублей",
        "photo":"https://avatars.mds.yandex.net/get-autoru-vos/4830814/83c5408897688c8681b95385840bad1a/1200x900n"
    },
    {
        "name": "Kia Carnival, 2021",
        "price": "2 500 000 рублей",
        "photo":"https://avatars.mds.yandex.net/get-autoru-vos/4763630/6f80e7bf3a0dc0267e411e9c698f068f/1200x900"
    },
    {
        "name": "Mitsubishi Outlander, 2022",
        "price": "2 900 000 рублей",
        "photo":"https://www.car250.com/wp-content/uploads/2020/12/2022-mitsubishi-outlander-looks-almost-real-in-sharp-accurate-rendering-153119_1.jpg"
    }

]
export type Diler =  {
    name: string,
    photo: string,
    enName: string | null,
    url:string
}
export type Cars={
    name: string,
    price:string,
    photo:string
}