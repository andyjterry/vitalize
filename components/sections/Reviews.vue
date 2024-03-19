<template>
    <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-bl from-[#11A6D9] to-[#FF6B01]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h class="">Testimonials</h>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with some amazing clients</p>
        </div>
        <div class="text-center mt-12">
          <Button
                    label="Loved our service? Leave us a review"
                    url="https://g.page/r/CRkB-jj1xVVXEBM/review"
                    colour="red"
                    size="sm"
                  />
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{{ `“${featuredTestimonial.body}”` }}</p>
            </blockquote>
            <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
              <div class="flex-auto">
                <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
                <div class="text-gray-600">{{ `${featuredTestimonial.author.company}` }}</div>
              </div>
              <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
            </figcaption>
          </figure>
          <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
            <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
              <figure v-for="testimonial in column" :key="testimonial.author.company" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote class="text-gray-900">
                  <p>{{ `“${testimonial.body}”` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                  <div>
                    <div class="font-semibold">{{ testimonial.author.name }}</div>
                    <div v-if="testimonial.author.company" class="text-gray-600">{{ `${testimonial.author.company}` }}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from '~/components/ui/Button.vue';
  const featuredTestimonial = {
    body: "Andy has just done some work for the charity I work for. His work is incredible and he is such a lovely guy. His responses were always so quick which was fantastic as I work in such a fast paced environment. I have already recommended Andy to a couple of people and I wouldn’t hesitate in recommending him further. If you’re in need of his skills, definitely give him a message! Thank you Andy! ",
  author: {
    name: 'Beth Codling',
    company: 'Newcastle Dog & Cat Shelter',
      imageUrl:
      'https://media.licdn.com/dms/image/D4E35AQEF100voTvTeA/profile-framedphoto-shrink_100_100/0/1701183162860?e=1711368000&v=beta&t=WdrnDNHRB2IyRQJTihJozayT5ejK2Yu7_DcFFWc5hXk',
      logoUrl: 'https://static.wixstatic.com/media/12e1c6_e1c47dc476df4ca588c6fd70cc37fd64~mv2.png/v1/fill/w_699,h_281,al_c,lg_1,q_85,enc_auto/12e1c6_e1c47dc476df4ca588c6fd70cc37fd64~mv2.png',
    },
  }
  const testimonials = [
    [
      [
        {
          body: "Andy created some fantastic posters for my recent Business Fair event and was also extremely good at promoting via Social Media. Andy made sure to include all the small details I requested in his posters and they came out brilliantly. I would recommend his design work and would be happy to work with him again in the future.",
    author: {
      name: 'Amneet Graham',
      company: 'Willows Rainbow Box',
      imageUrl:
              'https://media.licdn.com/dms/image/D4E03AQEG9lBV40JMBA/profile-displayphoto-shrink_100_100/0/1697035150073?e=1716422400&v=beta&t=I6BRIDFd8ZeKAyyXYLP4ChAkyYth8bAGB9eZXvDBy1o',
          },
        },
 
      ],
      [
        {
          body: "Andy was great, very patient throughout and he gave us a design that was just what we wanted. Very responsive and we were very impressed with the quality of the work he did for us. We were drawn to him having seen his other work which is great. He will be our go to person for all our design work in future.",
    author: {
      name: 'Rob Darbyshire',
      company: 'Rabbit & Bear',
      imageUrl:
              'http://chasesolar.org.uk/files/2022/02/blank-avatar-300x300.jpg',
          },
        },
      ],
    ],
    [
      [
        {
          body: "Andy very professional and gave us exactly what we asked for.",
    author: {
      name: 'Wai-Shung Wong',
      company: 'Pak Lok Chinese Restaurant',
      imageUrl:
              'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-1/347255379_829790618306546_2849912860524931887_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GQEU6KlVH4MAX9xEtjm&_nc_ht=scontent.fman2-2.fna&oh=00_AfB2ZakHrBvEYfpMJKLyygembqsZqMmkZECA555UNBlaQA&oe=65FC9165',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Andrew recently designed the badge for my football team as the old one was outdated, I gave Andrew a very brief outline of what I was looking for. Andrew came back to me with a badge that far outweighed my expectations, he was professional and listened to my brief and created a fantastic design, that is now on all of the new strips, players tops and tracksuits and club equipment! ",
    author: {
      name: 'Craig Granger',
      company: '',
      imageUrl:
              'https://media.licdn.com/dms/image/D4E03AQHP4zUWBp2wLQ/profile-displayphoto-shrink_100_100/0/1664109190832?e=1716422400&v=beta&t=8BhXsznu1mlV1I_T8V9Q5wb9yNGaSSj-KpjiMjiy5Hc',
          },
        },
      ],
    ],
  ]
  </script>