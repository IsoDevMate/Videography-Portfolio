export const brand = {
  mark: 'SNR',
  name: 'Barack Ouma',
  handle: '@snrdev001edits',
  city: 'Nairobi',
  country: 'Kenya',
  phoneDisplay: '0793 043 014',
  phoneTel: '+254793043014',
  email: 'oumabarack1047@gmail.com',
  whatsappChat: 'https://wa.me/254793043014',
  whatsapp: 'https://wa.me/254793043014?text=Hi%20Barack',
  instagram: 'https://www.instagram.com/snrdev001edits/',
  instagramEmbed: 'https://www.instagram.com/snrdev001edits/embed/',
  instagramPosts: [
    'https://www.instagram.com/reel/Dci39QtqAkW/',
    'https://www.instagram.com/reel/Dci3gA3I-oj/',
    'https://www.instagram.com/reel/Dci3GEqo3Zk/',
    'https://www.instagram.com/p/Dci29Axil0m/',
    'https://www.instagram.com/reel/DcVSyUvIV7h/',
    'https://www.instagram.com/reel/DcVScaVIaoh/',
  ],
}

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function guestMessage(need) {
  return `Hi Barack — I want: ${need}. Please reply with the next step.`
}

export function whatsappGuest(need) {
  return `https://wa.me/254793043014?text=${encodeURIComponent(guestMessage(need))}`
}

export function emailGuest(need) {
  const subject = encodeURIComponent(`SNR — ${need}`)
  const body = encodeURIComponent(guestMessage(need))
  return `mailto:oumabarack1047@gmail.com?subject=${subject}&body=${body}`
}

export const guestNeed = 'A conversation about working together'

export const hero = {
  kicker: 'Barack Ouma · Nairobi',
  lines: ['I shoot.', 'I edit.', 'I run the ads.'],
  lede: 'Videography, social media, and advanced cuts for Kenyan businesses.',
  body: 'You get finished video, running ads, and a channel that actually gets answered.',
}

export const marquee = [
  'Videography',
  'Social management',
  'Story replies',
  'DMs',
  'Shoot',
  'Ads',
  'Advanced edit',
  'Google Business',
]

export const deliver = {
  kicker: 'What you get',
  headline: 'Clear work. Clear delivery.',
  items: [
    {
      title: 'Video',
      get: 'I come, I shoot, I send a finished cut ready to post.',
    },
    {
      title: 'Ads',
      get: 'The same footage, cut for ads — then I help you run them.',
    },
    {
      title: 'Social',
      get: 'Stories replied. DMs handled. The page does not go quiet.',
    },
    {
      title: 'A quote',
      get: 'Tap WhatsApp. No form, no account. I send the figure.',
    },
  ],
}

export const work = {
  kicker: 'Work',
  headline: 'This is what I do.',
  items: [
    {
      num: '01',
      title: 'Social management',
      get: 'Daily presence — stories, DMs, replies.',
      need: 'Social management — story replies and DMs',
    },
    {
      num: '02',
      title: 'Shoot & ads',
      get: 'On-ground film. Then ads that actually run.',
      need: 'Shoot and ads — capture plus ad management',
    },
    {
      num: '03',
      title: 'Advanced edit',
      get: 'Colour, sound, pacing. Exclusive cuts, not volume.',
      need: 'Advanced editing — an exclusive cut',
    },
    {
      num: '04',
      title: 'Web / Google',
      get: 'A site or Google Business profile when you need a storefront.',
      need: 'A website or Google Business profile',
    },
  ],
}

export const process = {
  kicker: 'How',
  steps: [
    { num: '01', title: 'WhatsApp', body: 'You tap. You say what you need. I quote.' },
    { num: '02', title: 'Shoot', body: 'Your place, your people. I run the camera.' },
    { num: '03', title: 'Cut', body: 'I edit offline. You see it when it is ready.' },
    { num: '04', title: 'Live', body: 'Posted, advertised, replied to.' },
  ],
}

export const instagram = {
  kicker: 'Proof',
  headline: 'Latest six posts.',
  body: 'Straight from @snrdev001edits. Tap a post, or open the full feed.',
}

export const contact = {
  kicker: 'Contact',
  headline: 'Start on WhatsApp.',
  body: 'That is the fastest way. Email if you want a thread.',
}
