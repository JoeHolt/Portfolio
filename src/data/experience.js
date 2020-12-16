export default  {
  experiences: [
      {
        company: 'University of Wisconsin-Madison',
        title: "Bachelor's in Computer Science",
        start: 'Fall 2018',
        end: 'Spring 2021',
        color: '#9b0000',
        description:
          'Student at the University of Wisconsin-Madison College of Letters and Science persuing of a degree in Computer Science. Taken courses across all breadth of knowledge to become a more rounded and balanced individual. Computer science wise, took courses with a focus on Operating Systems and Artificial Intelligence. Outside of classes, I focused on research and extracuriculars, such as Theta Tau. At Theta Tau, I served as the treasurer and a member of the executive board for two semesters  before graduating.',
        projects: [
          'Theta Tau: professional co-ed egineering fraternity - Exec Board / Treasurer',
          'NEXT Machine Learning Lab',
          'College of Letters and Science',
          '3.80/4.00 GPA'
        ],
        skills: [
          {
            title: 'Course Work',
            category: 'expand',
            expanded_discription:
              'A list of the most relevant courses I took at UW-Madison',
            expanded: [
              {
                category: 'Artificial Intelligence',
                items: [
                  {
                    name: 'Introduction to Artificial Intelligence [CS 540]',
                    description:
                      'Linear & logistic regression, clustering, neural networks, state space search, game theory.'
                  }
                ]
              },
              {
                category: 'Theory',
                items: [
                  {
                    name: 'Introduction to Algorithms [CS 577]',
                    description:
                      'Recursion, divide and concquer, greedy, graph theory, dynammic programming, network flow, NP/NP-hard, and asymptotic analysis.'
                  },
                  {
                    name: 'Data Structures and Object Oriented Design [CS 400]',
                    description:
                      'Polymorphism, overloading, classes, inheritance, arrays, hash tables, linked lists, trees (binary, AVL, RB, B-tree), queue, stack, heap'
                  },
                  {
                    name: 'Basic Programming [CS 300]',
                    description:
                      'Through the computer science into programming track, I learned to program & create user interfaces with Java.'
                  }
                ]
              },
              {
                category: 'Application',
                items: [
                  {
                    name: 'Introduction to Operating Systems [CS 537]',
                    description:
                      'Process schueling, virtual address space, locks & concurrent systems, presistent storage, RAID, filsystems and journaling.'
                  },
                  {
                    name: 'Introduction to Information Security [CS 642]',
                    description:
                      'Cryptographic primitives, penetration testing, security protocols, system security, and emerging topics.'
                  },
                ]
              },
              {
                category: 'Math',
                items: [
                  {
                    name: 'Calculus and Analystical Geometry [Math 237]',
                    description:
                      'Advanced integration techniques, differential equations, convergence, series, vectors, dot product'
                  },
                  {
                    name: 'Multi-variable Calculus',
                    description:
                      'Vector valued functions, partial derivitives, multiple integrals and integration of vector fields.'
                  },
                  {
                    name: 'Descrete Math [Math 240]',
                    description:
                      'Foundational knowledge in logic, sets, functions, algorithms, counting, probability, relations, graphs, trees, formal mathematical proofs (focus on induction)'
                  },
                  {
                    name: 'Introduction to Linear Algebra [Math 340]',
                    description:
                      'Linear equations and matricies, real vector spaces, linear transformations and matricies, determinants, Eigenvalues and Eigenvectors and inner product spaces.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        company: 'Amazon Inc.',
        title: 'Sowftware Development Engineering Intern',
        start: 'May 2020',
        end: 'August 2020',
        color: '#FF9900',
        description:
          'Worked as a Software Development Intern at Amazon on the Prime Video API Resiliency team. While at Amazon, I utilized internal Amazon tooling and AWS to create a web portal for my team that enables quick interaction with team-specific tools and software. Upon completing my internship with Amazon, I accepted a full time offer to become a Software Development Engineer I beginning in August.',
        projects: [
          'Utilized AWS Lambda and API Gateway to build a serverless applicaiton',
          'Built an web authentification system from scratch based on OAuth2 standards',
          'Created new service using internal Amazon tooling',
          'Wrote documentation and guides that enable other employees to build similar tools'
        ],
        skills: [
          { title: 'AWS Lambda', category: 'tool' },
          { title: 'AWS API Gateway', category: 'tool' },
          { title: 'React', category: 'dev' },
          { title: 'AWS Cognito', category: 'tool' },
          { title: 'OAuth2', category: 'dev' },
          { title: 'Serverless', category: 'dev' },
        ]
      },
      {
        company: 'PegEx',
        title: 'Junior Software Developer',
        start: 'May 2019',
        end: 'May 2020',
        color: '#99cc33',
        description:
          'Starting in May 2019, I began working as a full-stack web devevelopment internship at PegEx, a Software as a Service company for waste management companies. Upon completion of my internship, I was promoted to Junior Developer where I have continued to work part-time during the school year. Some of my favorite projects thus far can be seen bellow:',
        projects: [
          'Added Microsoft SSO to the web app',
          'Implemented dynamic translation strings throughout platform',
          'Refactored the platforms widget system',
          'Built a dynamic form builder for complex web forms'
        ],
        skills: [
          { title: 'Vue', category: 'tool' },
          { title: 'Frontend', category: 'dev' },
          { title: 'Backend', category: 'dev' },
          { title: 'Kubernetes', category: 'tool' },
          { title: 'SCRUM', category: 'plan' },
          { title: 'MySQL', category: 'tool' }
        ]
      },
      {
        company: 'UW-Madison NEXT Machine Learning Lab',
        title: 'Reseasrch Assistent',
        start: 'August 2018',
        end: 'Present',
        color: '#c5050c',
        description:
          'Starting August before my freshman year of college, I started working as a research assistent at the University of Wisconsin-Madison NEXT Machine Learning Lab under faculty member Dr. Robert Nowak. In this position I have done research in the fields of active learning, humor and clustering. Some of the most notable projects I worked on:',
        projects: [
          'Facial Emotion Regonition and Clustering Demo',
          'AHA: AI Humor Assistent',
          'Adaptive Size to Improve Model Training Speeds'
        ],
        skills: [
          { title: 'Python', category: 'lang' },
          { title: 'Clustering', category: 'tool' },
          { title: 'Algorithms', category: 'dev' },
          { title: 'Research', category: 'dev' },
          { title: 'Regression', category: 'tool' }
        ]
      },
      {
        company: 'USA Clean',
        title: 'Web Development Intern',
        start: 'November 2017',
        end: 'May 2018',
        color: '#1891c7',
        description:
          "While I was in high school, I worked as a web development intern for USA Clean. During this time, I gained experience with both writing and deploying websites. I was able to work with Amazon Web Service's EC2 and S3 to create live product pages with a focus on responsive design.",
        skills: [
          { title: 'HTML', category: 'lang' },
          { title: 'CSS', category: 'lang' },
          { title: 'AWS', category: 'tool' },
          { title: 'Linux', category: 'dev' },
          { title: 'JavaScript', category: 'lang' }
        ]
      }
    ]
}
