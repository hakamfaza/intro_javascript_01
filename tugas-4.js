// Tugas 4
let me = {
    name : 'Muhamad Hakam Faza',
    email : 'hakamfaza@gmail.com',
    hobby : 'Membaca buku',
}

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
    ...me
}
console.log(data)

const dest = data.address;
const {street, city} = dest;

console.log(street)
console.log(data.address.street)