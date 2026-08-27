<template>
  <div>
    <HeroSection :eyebrow="doc.eyebrow" :title="doc.title" :subtitle="doc.intro" compact />

    <section class="section">
      <div class="container container--narrow legal">
        <section v-for="block in doc.sections" :key="block.heading" class="legal__block">
          <h2 class="legal__heading">{{ block.heading }}</h2>
          <p v-for="(para, i) in block.body" :key="i" class="legal__p">{{ para }}</p>
          <ul v-if="block.list" class="legal__list">
            <li v-for="item in block.list" :key="item">{{ item }}</li>
          </ul>
        </section>

        <p class="legal__contact">
          Questions about this page? Email
          <a :href="contact.emails[0].href">{{ contact.emails[0].display }}</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/common/HeroSection.vue'
import { brand, contact, SITE_URL } from '../data/site.js'

const route = useRoute()

const documents = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro: `How ${brand.name} handles information collected through this website.`,
    sections: [
      {
        heading: 'Scope',
        body: [
          `This policy covers ${SITE_URL.replace(/^https?:\/\//, '')}, the corporate website of ${brand.name}. The other HiTrace Solutions businesses operate their own websites and platforms, each with its own privacy terms — including OneGPS Africa at onegps.africa and DekaERP at dekaerp.com.`
        ]
      },
      {
        heading: 'Information we collect',
        body: [
          'This website collects only the information you choose to send us through the contact form or by contacting us directly.'
        ],
        list: [
          'Your name, and your company if you provide one',
          'Your email address and phone number',
          'The area of interest you select and the message you write'
        ]
      },
      {
        heading: 'How we use it',
        body: [
          'We use the details you submit to respond to your enquiry and to route it to the right business.  We do not sell your information, and we do not use it for unrelated marketing.'
        ]
      },
      {
        heading: 'Cookies and analytics',
        body: [
          'This website sets no cookies of its own in order to work. If analytics are enabled, we ask before anything is stored: the banner you see on your first visit lets you accept or decline, and declining means no analytics script is loaded and no analytics cookie is set.',
          'Your choice is remembered in your browser’s local storage, not in a cookie, and never leaves your device. To change it, clear this site’s data in your browser and the banner will ask again.'
        ]
      },
      {
        heading: 'Third parties',
        body: [
          'Pages on this site embed a Google Maps frame showing our office location. Loading that map involves a request to Google, which is subject to Google’s own privacy terms. Links to onegps.africa, dekaerp.com and our social media profiles take you to services operated separately from this website.'
        ]
      },
      {
        heading: 'Retention and your rights',
        body: [
          'Enquiries are kept only as long as needed to deal with them and to maintain a record of our correspondence. You can ask us at any time to tell you what we hold about you, to correct it, or to delete it.'
        ]
      }
    ]
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Use',
    intro: `The terms on which this website is made available by ${brand.name}.`,
    sections: [
      {
        heading: 'Using this website',
        body: [
          `This website is provided by ${brand.name} for general information about the company and its businesses. By using it you agree to these terms.`
        ]
      },
      {
        heading: 'Content',
        body: [
          'The text, graphics, logos and design of this website belong to HiTrace Solutions or are used with permission. You may view and share pages, but you may not reproduce the content commercially without written consent.'
        ]
      },
      {
        heading: 'Accuracy',
        body: [
          'We keep the information on this site current, but it is provided for general guidance and does not form an offer, a quotation or professional advice. Service descriptions are summaries — the terms of any engagement are set out in the agreement for that engagement.'
        ]
      },
      {
        heading: 'Other businesses and external links',
        body: [
          'OneGPS Africa and DekaERP operate their own websites, products and customer agreements. Links from this site to those websites, or to any other external service, are provided for convenience; we are not responsible for the content or terms of websites we do not operate.'
        ]
      },
      {
        heading: 'Contact',
        body: [
          `These terms are governed by the laws of Ghana. Questions can be sent to ${contact.emails[0].display}.`
        ]
      }
    ]
  }
}

const doc = computed(() => documents[route.meta.document] || documents.privacy)
</script>

<style scoped>
.legal__block {
  margin-bottom: var(--space-10);
}

.legal__heading {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
}

.legal__p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-4);
}

.legal__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-left: var(--space-5);
}

.legal__list li {
  position: relative;
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.legal__list li::before {
  content: "";
  position: absolute;
  left: calc(var(--space-5) * -1);
  top: 11px;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
}

.legal__contact {
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.legal__contact a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
</style>
