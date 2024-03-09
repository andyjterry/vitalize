export default defineNuxtPlugin(nuxtApp => {
    const details = {
      phone: "+447447470471",
      email: "hello@brandbadger.com",
      address: "114 Lutterworth Road, Newcastle Upon Tyne, NE12 8QS",
      town: "Newcastle",
      facebook: "https://facebook.com/brandbadger",
      instagram: "https://instagram.com/brandbadger",
      github: "https://github.com/andyjterry"
    };
  
// Using the provide function to make it globally available
nuxtApp.provide('details', details);
  });
  