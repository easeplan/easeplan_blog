---
title: 'Implementing Webhooks in Strapi for Real-time Notifications'
description: "In the bustling digital world, where information travels at the speed of light, users expect nothing less than instant notifications. Whether it's a content update or a system alert, today's audience demands to be in the loop, in real-time."
pubDate: Dec 12 2023
heroImage: '/Artboard 1 (1).png'
author: 'Ekekenta Clara'
# readTimeInMinutes: '6 min'
authorBio: 'Software Engineer and techincal writer'
profilePicture: 'https://avatars.githubusercontent.com/u/89540623?v=4'
---


## Introduction:
How do we achieve this fluid, lightning-fast communication? Here's where our duo, Strapi and webhooks, come into play.


Before we go further, let's demystify these tools.

### Strapi 
Think of Strapi as a helpful intermediary. It's an open-source, Node.js based headless CMS. But, unlike other content management systems, Strapi is all about giving developers the reins. It's customizable, developer-friendly, and can be integrated seamlessly with databases, frameworks, and, yes, webhooks.

### Webhooks
Now, imagine a doorbell that rings every time there's activity outside your door. That's essentially what a webhook does for your application. It's a method allowing systems to exchange data in real-time. When an event occurs in one system, a notification is sent to another system, eliminating the need for constant manual checks.

Together, Strapi's adaptability combined with the real-time capabilities of webhooks makes for a formidable pair.

## Purpose of the Tutorial:
So, why should you stick around and dive deeper into this tutorial? Simple. We're not just discussing theory here. We're about to embark on a hands-on journey where you'll learn to harness the power of Strapi and webhooks. By the end, you'll be equipped with the knowledge to set up real-time notifications for your application, ensuring your users are always informed and engaged.

We'll build a blog application, and send realtime notification emails to users when a type of content they subscribed to is created.

Ready to dive in? Let's get started and unlock the potential of real-time notifications using Strapi and webhooks!


## Setting Up the Development Environment for Strapi Webhooks
First things first, let's make sure we have Strapi installed. If you haven't already, you'd need to have Node.js on your machine. Strapi runs on Node, and it's the backbone of our setup.

Then run the command below to get Strapi CLI installed globally on your machine.

```
npm install strapi@latest -g
```

Next, create a new Strapi application with the command below:

```
npx create-strapi-app@latest webhook-demo
```

The above command will create and setup all the necessary files, folder and configuration required to get your application running. Navigate to `http://localhost:1337/admin` to login to your admin dashboard.

![](https://hackmd.io/_uploads/HkDWpqzWp.png)


## Creating the Strapi content model
Once you have logged in to your Strapi dashbaord, let's create your content type models. We'll be creating a **Blog** and **Subsriber** contents types. Click on the `Create your Content type` button.

![](https://hackmd.io/_uploads/B1_3fizb6.png)

Now create a Blog collectio and hit the Continue button to add the fields.

![](https://hackmd.io/_uploads/ByTm12fb6.png)


Add the following fields to your Blog collection:

- **title:** For the title of the blogs(use the Text type)
- **content:** For the blog content (use the Rich text type)
- **cover:** This is for the blog cover image (use the Media type).
- **category:** To specify the category the blog belongs to (use Enumaration type)

![](https://hackmd.io/_uploads/HkGxm2fbT.png)



Next, save the collection and proceed to creating the Subscribers collection with the following fields:


- **name:** The name of the subscriber (use the Text type).
- **email:** The subscriber email (use the Text type).
- **categories:** Category of blog they selected (use the Text type).

![](https://hackmd.io/_uploads/rJKxQ2f-p.png)



## Setting up a webhook receiver
In the context of Strapi, webhooks serve as automated signals, informing external applications about specific events. For instance, every time a new content entry is added or an existing one is modified, a webhook can be configured to notify another application about this change.

For an external application to receive and process these notifications from Strapi, it requires an endpoint. This endpoint, often termed a "webhook receiver", is responsible for accepting the data sent by Strapi and then taking appropriate action based on that data.

For this demonstration, we won't be using an external application, we'll setup the webhook receiver in our Strapi applciation to send emails to subsrbers.


To get started, generate an api by running the commmand below:

```
npx strapi generate api   
```

The above command will take you through some prompts, input `notify` as the API name and select `n` for `Is this API for a plugin?` prompt.


Now let's setup up the email plugin to allow you send emails from your Strapi application. Install the Sendgrid provider for the Email plugin with the command below:

```
npm install @strapi/provider-email-sendgrid --save
```

Then create a `plugin.js` file in the  `config` folder if it does not exists and add the email plugin config:

```

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: '<EMAIL_FROM>',
        defaultReplyTo: 'EMAIL_TO',
        testAddress: 'TEST_EMAIL',
      },
    },
  },
});
```
Replace the `EMAIL_FROM`, `EMAIL_TO` and `TEST_EMAIL` with your test emails. 

Then in the the `api/notify/controllers/notify.js` file, add the code snippet below:

```
module.exports = {
  async create(ctx) {
    if (ctx.request.body.model === "blog") {
      // Fetch users interested in this category
      const interestedUsers = await strapi.entityService.findMany(
        "api::subscriber.subscriber",
        {
          filters: {
            category: ctx.request.body.entry.catergory,
          },
        }
      );
      // Send email to each user
      for (const user of interestedUsers) {
        strapi.plugins["email"].services.email.send({
          to: user.email,
          from: "<SEND_EMAIL>",
          subject: "New Blog Update",
          text: "A New blog you are interested in has been created!",
        });
      }
    }

    return ctx.send({ message: "Emails sent successfully!" });
  },
};
```
In the above code snippet, we have created a controller that checks if the webhook triggered is from the blog model and then searches for the subscribers collection to get all the users that are interested in the blog created and send them an email.


Next, add the code snippets below to the `api/notify/routes/notify.js` to define the webhook routes:

```
module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/notify',
     handler: 'notify.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
```


## Implementing webhooks in Strapi
Now let's head over to the Strapi admin to setup the webhook to connect to the webhook url. From your Strapi admin click on `Settings -> Webhooks` and click `Create new webhook` button.

![](https://hackmd.io/_uploads/Bk_RMxXZ6.png)

The enter the Name for the webhook, copy and past the webhook URL you created and check the CREATE event to notify user when ever a new blog is created.

![](https://hackmd.io/_uploads/HJ0rQlmWp.png)


Click on the **Save** button to save the webhook and click the Trigger button to test it.

Now go ahead to create a new subscriber and then create blog and you will you notice the email will be send to all the subscribers in the catogory of blog you created.

## Conclusion
Thank you for journeying with us to the end of this tutorial. Together, we've implemented real-time notifications using webhooks in Strapi. We began with foundational insights into Strapi and webhooks, progressed to creating collection models, and culminated in setting up a webhook receiver. For a deeper dive and further exploration on Strapi webhooks, I highly recommend checking out the [official Strapi documentation](https://docs.strapi.io/dev-docs).