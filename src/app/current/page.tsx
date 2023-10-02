import Markdown from 'react-markdown'

const markdown = 'I currently work as a Full Stack Software Engineer at Affinipay. \
    I was hired onto the MyCase team before their acquisition by Affinipay in June 2022. \
    After successfully onboarding with MyCase, I spent the next year learning the ropes at the company and eventually brought \
    the Advanced Document Automation product to the finish line, driving increased sales in the advanced tier. \
    Now, I am working on an expense management product, where I am building an entire system from the ground up. From architecture decisions \
    to pipelines and features, I am contributing as a truly full-stack engineer.'


export default function CurrentPage() {
  return (
    <Markdown>
      {markdown}
    </Markdown>
  );
}