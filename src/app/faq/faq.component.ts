import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqs: FaqItem[] = [
    // ... your FAQ items ...
        {
      question: 'How do I create an account on eStatikk?',
      answer: 'To create an account, click the "Sign Up" button at the top right corner of the page and fill in the required details.',
      isOpen: false
    },
    {
      question: 'What kind of statistics can I find on eStatikk?',
      answer: 'eStatikk provides a wide range of statistics including player rankings, team performances, match histories, and detailed game analytics.',
      isOpen: false
    },
    {
      question: 'Can I watch live eSports matches on eStatikk?',
      answer: 'Yes, we stream live matches from various eSports tournaments around the world. Check our "Live" section for the current and upcoming broadcasts.',
      isOpen: false
    },
    {
      question: 'How are player rankings determined?',
      answer: 'Player rankings are determined based on their performance metrics across various tournaments, their consistency, and their impact on the outcomes of the matches they play.',
      isOpen: false
    },
    {
      question: 'How can I join an eSports team through eStatikk?',
      answer: 'While eStatikk does not directly facilitate team memberships, we do provide resources and forums where you can connect with teams looking for players.',
      isOpen: false
    },
    {
      question: 'Does eStatikk provide coaching or training resources?',
      answer: 'We offer a variety of training resources including tutorials, strategy guides, and analysis of professional games to help you improve your skills.',
      isOpen: false
    },
    {
      question: 'How often are statistics updated on eStatikk?',
      answer: 'Our statistics are updated in real-time during live matches and daily for all other content to ensure you have the latest information.',
      isOpen: false
    },
    {
      question: 'Can I contribute articles or content to eStatikk?',
      answer: 'Yes, we welcome contributions from the community. Please visit our "Contribute" section to submit your content for review.',
      isOpen: false
    },
    {
      question: 'How can I advertise on eStatikk?',
      answer: 'For advertising inquiries, please contact our marketing team through the "Contact" section with details about your campaign.',
      isOpen: false
    },
    {
      question: 'Where can I find information about upcoming eSports events?',
      answer: 'Our "Events" section provides a comprehensive calendar of upcoming eSports events, including tournaments, meetups, and conventions.',
      isOpen: false
    },
  ];

  toggleFaq(faq: FaqItem): void {
    // If you want to allow multiple FAQ items to be open at the same time,
    // simply remove the forEach loop and only toggle the clicked FAQ.
    this.faqs.forEach(f => {
      if (f !== faq) f.isOpen = false; // This will close all other FAQs except the one clicked
    });
    faq.isOpen = !faq.isOpen; // This toggles the clicked FAQ
  }
}
