// Tugas 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let me = {
    ...data,
    name : 'Muhamad Hakam Faza',
    email : 'hakamfaza@gmail.com',
    hobby : 'Membaca buku',
}

console.log(me)

const dest = data.address;
const {street, city} = dest;

console.log(street, city)