import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React JS
              </a>
              <p className="text-gray-600">5 Jan 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What are the different ways to manage a state in a react
                  application?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              The Four Kinds of React State to Manage When we talk about state
              in our applications, it is important to be clear about what types
              of state actually matter. There are four main types of state you
              need to properly manage in your React apps: Local state, Global
              state, Server state, URL state <br />
              Local (UI) state Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. For example, local state would be needed to show or
              hide a modal component or to track values for a form component,
              such as form submission, when the form is disabled and the values
              of a form is inputs.Global (UI)
              <br />
              state Global state is data we manage across multiple components.
              Global state is necessary when we want to get and update data
              anywhere in our app, or in multiple components at least. A common
              example of global state is authenticated user state. If a user is
              logged into our app, it is necessary to get and change their data
              throughout our application. How to Manage Local State in React
              Local state is perhaps the easiest kind of state to manage in
              React, considering there are so many tools built into the core
              React library for managing it. useState is the first tool you
              should reach for to manage state in your components. It can take
              accept any valid data value, including primitive and object
              values. Additionally, its setter function can be passed down to
              other components as a callback function (without needing
              optimizations like useCallback).
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                JavaSript
              </a>
              <p className="text-gray-600">15 Sep 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  How does prototypical inheritance work?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              JavaScript is a bit confusing for developers experienced in
              class-based languages (like Java or C++), as it is dynamic and
              does not have static types. When it comes to inheritance,
              JavaScript only has one construct: objects. Each object has a
              private property which holds a link to another object called its
              prototype. That prototype object has a prototype of its own, and
              so on until an object is reached with null as its prototype. By
              definition, null has no prototype, and acts as the final link in
              this prototype chain. It is possible to mutate any member of the
              prototype chain or even swap out the prototype at runtime, so
              concepts like static dispatching do not exist in JavaScript. While
              this confusion is often considered to be one of JavaScript's
              weaknesses, the prototypical inheritance model itself is, in fact,
              more powerful than the classic model. It is, for example, fairly
              trivial to build a classic model on top of a prototypical model —
              which is how classes are implemented. Although classes are now
              widely adopted and have become a new paradigm in JavaScript,
              classes do not bring a new inheritance pattern. While classes
              abstract most of the prototypical mechanism away, understanding
              how prototypes work under the hood is still useful.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Unit Test
              </a>
              <p className="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is a unit test? why should we write unit test?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important. In
              his book "Working Effectively with Legacy Code", author Michael
              Feathers states that such tests are not unit tests when they rely
              on external systems: “If it talks to the database, it talks across
              the network, it touches the file system, it requires system
              configuration, or it can't be run at the same time as any other
              test." Modern versions of unit testing can be found in frameworks
              like JUnit, or testing tools like TestComplete. Look a little
              further and you will find SUnit, the mother of all unit testing
              frameworks created by Kent Beck, and a reference in chapter 5 of
              The Art of Software Testing . Before that, it's mostly a mystery.
              I asked Jerry Weinberg about his experiences with unit testing --
              "We did unit testing in 1956. As far as I knew, it was always
              done, as long as there were computers". Regardless of when and
              where unit testing began, one thing is for sure. Unit testing is
              here to stay. Let's look at some more practical aspects of unit
              testing.Well-written unit tests act as documentation for your
              code. Any developer can quickly look at your tests and know the
              purpose of your functions. It simplifies the debugging process.
              Unit testing is an integral part of extreme programming.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                React Angular .Vue
              </a>
              <p className="text-gray-600">28 Dec 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  React VS Angular VS .Vue
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Angular JS The best thing about Angular is its constant updates.
              Angular launches an update every 6 months and the new versions
              build upon the older ones. Take Angular 11 update, for example,
              which has gotten rid of all bugs the previous version had. Of
              course, you need to keep a watch on the updates, as the code may
              be affected in case of a major update. But Google makes sure to
              wait another 6 months after an update before pulling the previous
              tools, giving you a full year to change code if the need arises.
              However, this is just the tip of the iceberg. There are several
              more reasons why Angular is a favorite for large scale apps with
              complex functionalities, which wish to scale further. 1. High
              performance and functionality at minimal cost Angular is a robust
              framework that has all the needed functionalities packed into its
              official library. And since it is from Google, you can be assured
              of the quality of code and high-end security features. Web
              development with Angular JS requires fewer imports of third-party
              libraries, significantly reducing app development costs. 2.
              Maintenance Maintenance of Angular JS code is usually a piece of
              cake as it uses Typescript- a simplified version of Javascript
              which makes it easier for developers to catch faulty code whilst
              typing itself. Besides that, Angular imports dependencies
              (external repositories of code) to help with testing, making the
              whole process of testing the app a smooth ride. 3. Reusability As
              a decision-maker, you must be worried about the development cost
              and the time-to-market. A major factor in Angular development that
              contributes to a reduction in both is the clean, consistent code.
              You can use it multiple times and it won’t cause a hint of
              confusion React JS This open-source Javascript library has become
              quite the rage for developing interactive web and mobile apps
              since Facebook launched it in 2013. There are primarily three
              reasons which have made the React library a developer darling -
              Code Reusability- it allows developers to reuse blocks of code for
              a simple function Ease-of-use - React, though tougher than Vue,
              has a less steep learning curve than Angular JS. Customizable -
              The crucial difference between the library and framework is about
              control. This is where React is ahead of Angular- it is highly
              customizable. You are in control and you incorporate the parts of
              the library you need, unlike Angular, which does not allow much
              modification. As per reports, 42% of developers prefer React
              Native for building cross-platform applications. Click To Tweet
              Here are a few more reasons why you can bank on React Js: 1. SEO
              Friendly To make it big on the Internet, you need to mark a solid
              online presence and the best way to go about it is a strong SEO
              game. The clean and simple code of React makes the page load time
              of a website almost negligible. And page load time is a critical
              factor. According to Google, the probability of a mobile site
              visitor bouncing increases 123% if the page load time goes from 1
              second to 10 seconds. 2. React Developer Tools React Developer
              Tools is a Chrome and Firefox extension that can come in very
              handy for quick edits to UI and observing the current state of the
              application. 3. Migration to React Native Whether you’re starting
              a business or expanding the one you already have, in 2021, you
              will always be looking to launch a mobile application if you
              haven’t already. React Native is already one of the most popular
              cross platform mobile app development frameworks due to the high
              performance of cross-platform apps developed with it and on top of
              that, easy migration of components from React JS to React Native
              reduces the time-to-market as well. All the developers would have
              to do is simply check UI on mobiles and then just make the
              required changes to make it more mobile-friendly.
              <br />
              Vue JS Since Vue is the new kid on the block, not many businesses
              have ventured into Vue JS development yet, and thus, real-time
              assessment of the pros and cons of Vue is not very
              well-documented. However, what we do know is that Vue has the best
              of both worlds- two-way data binding like Angular and flexibility
              in code like React. Because of this, Vue is rising steadily
              through the ranks and has a massive market in Asia- Alibaba and
              Xiaomi are the big names using Vue JS. Hence, the fastest
              JavaScript framework – TezJS, uses Vue as the primary base of the
              language Vue is best utilized in cases of lightweight yet high
              performance, intuitive apps as the applications are quickly ready
              for the market without compromising on the performance or
              functionalities. Let us take a quick look at what makes Vue JS a
              lucrative choice for businesses. 1. Size and Simplicity It is a
              tiny framework of only 21KB, so download and startup take next to
              no time! Even the code in Vue is short and simple - what may run
              into tens of lines on jQuery will be a line or two in Vue. This
              allows time-efficient development of applications and templates.
              Even the mighty GitLab is in awe of Vue, saying - “Vue JS comes
              with the perfect balance of what it can do for you and what you
              need to do yourself.” 2. Boosts performance ISimulations run by
              third parties have shown that Vue performs better than Angular and
              as well as React in manipulating rows and columns in tables. This
              is because unlike Angular, it has a virtual DOM, and the Vue DOM
              is lighter than the one React uses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
