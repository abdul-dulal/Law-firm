import React from "react";

const About = () => {
  return (
    <div className="container mx-auto grid gap-5 md:grid-cols-3 my-10">
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Difference between authentication and authorization
          </h5>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="text-xl ">Authorization</span> in system security is
          the process of giving the user permission to access a specific
          resource or function. This term is often used interchangeably with
          access control or client privilege. In secure environments,
          authorization must always follow authentication. Users should first
          prove that their identities are genuine before an organization’s
          administrators grant them access to the requested resources <br />
          <span className="text-xl">Authentication</span> is about validating
          your credentials like User Name/User ID and password to verify your
          identity. The system determines whether you are what you say you are
          using your credentials. In public and private networks, the system
          authenticates the user identity via login passwords. Authentication is
          usually done by a username and password, and sometimes in conjunction
          with factors of authentication, which refers to the various ways to be
          authenticated. Read more: Difference between Authentication and
          Authorization | Difference Between
        </p>
      </div>
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            why we are using firebase? Alternatives to Firebase Authentication
          </h5>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Firebase helps us build and run successful apps. Backed by
          Google.Accelerate app development with fully managed backend. Firebase
          provide Products and Solutions. Accelerate Development. Monitor App.
          Firebase also provide completely free services, like Authentication,
          and Cloud or In-App Messagin Performance. infrastructure.These
          services, although often missed, boost Firebase's already tremendous
          value by a fair bit
          <p className="text-xl"> Alternatives to Firebase Authentication</p>
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
          <li>JSON Web Token</li>
          <li>Amazon Cognito</li>
          <li>Keycloak</li>
        </p>
      </div>
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            What other services does `firebase` provide other than
            authentication?
          </h5>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Firebase helps us develop high-quality apps, grow your user base. Each
          feature works independently, and they work even better together.
          <p className="text-xl"> Other service in firebase</p>
          <li>Realtime Database</li>
          <li>Remote Config</li>
          <li>Cloud Function</li>
          <li>Authentication</li>
          <li>Cloud Messageing</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
        </p>
      </div>
    </div>
  );
};

export default About;
