"use client";
import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import ClientAndInd from "./sections/ClientAndInd";
import ProjectGoals from "./sections/ProjectGoals";
import BusinessChlanges from "./sections/BusinessChallenges";
import Soltions from "./sections/Soltions";
import KeyFeatures from "./sections/KeyFeatures";
// import TechStack from "@/app/about/sections/TechStack";
import OurImpact from "./sections/OurImpact";
// import OurWork from "@/app/component/sections/OurWork";
// import TestimonialsN from "@/app/component/sections/TestimonialsN";
import Footer from "../../sections/Footer";
import { useGlobalContext } from "../../context/GlobalContext";

const Cases = ({ params }) => {
  console.log("path", params.cases);

  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);
  const heroDataMap = {
    "auto-oem": [
      {
        // logo: "/portfolio/mbenz/hero/logo.png",
        title: "Gesture Recognition based User Experience",
        description:
          "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Automotive OEM.",
        industry: "Automotive OEM",
        year: "2015",
        heroImg: "/our-work/gesrec.png",
      },
    ],
    vrups: [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "Vulnerable Roadside User Protection System",
        description:
          "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Automotive Tier 1 autonomous driving initiative.",
        industry: "Automotive Tier 1",
        year: "2018",
        heroImg: "/our-work/vrups.jpg",
      },
    ],
    "federated-learning": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "Federated Learning on Edge",
        description:
          "Revolutionizing privacy and efficiency in data processing with Federated Learning (FL) on edge devices, enabling real-time, secure analytics in several key sectors.",
        industry: " Automotive OEM",
        year: "2023",
        heroImg: "/portfolio/fedLearning/img1-2.png",
      },
    ],

    "fitness-pose-estimation": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title:
          "Posture Estimation: Harnessing ML for Personalized Physiotherapy",
        description:
          "Empowering exercise perfection with AI-driven real-time pose estimation, providing interactive visual feedback for correct posture and effective workouts.",
        industry: "Healthcare",
        year: "2023",
        heroImg: "/portfolio/fitness/img1-2.png",
      },
    ],

    sqlwizard: [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "Secure Text-to-SQL Interface",
        description:
          "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction.",
        industry: "FMCG Retail",
        year: "2023",
        heroImg: "/our-work/sqlwizard-logo1.png",
      },
    ],

    // "loneliness-assistant": [
    //   {
    //     // logo: "/portfolio/bosch/hero/logo.png",
    //     title: "Loneliness Assistant",
    //     description:
    //       "Personalised assistant designed to empathize with humans and serves as a close companion by engaging in an emotionally deep manner.",
    //     industry: "Healthcare",
    //     year: "2024",
    //     heroImg: "/our-work/lonely_llm.webp",
    //   },
    // ],

    "fashion-framework": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "Indian Fashion Insights framework",
        description:
          "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights.",
        industry: "Fashion Retail",
        year: "2022",
        heroImg: "/our-work/fashion.png",
      },
    ],

    "banking-infra": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "AI Banking Infrastructure Monitoring",
        description:
          "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modelling, streamlined with efficient application monitoring.",
        industry: "Fintech",
        year: "2021",

        heroImg: "/our-work/bankInsMo.png",
      },
    ],

    rag: [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "Secure Smart Journal",
        description:
          "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
        industry: "Technology",
        year: "2024",
        heroImg: "/our-work/rag_weave.jpg",
      },
    ],

    "skin-cancer-detection": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "AI-Assisted Skin Cancer Detection",
        description:
          "Enhancing skin cancer by diagnosing user’s skin images on their mobile phones, improving dermatological care's accuracy, accessibility, and efficiency.",
        industry: "Healthcare",
        year: "2020",
        heroImg: "/our-work/dermos.jpeg",
      },
    ],

    "auto-mto": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: " AutoMTO: Revolutionizing Material Takeoff in Oil & Gas EPCC",
        description:
          "Deploying AI to swiftly convert Process and Instrumentation Diagrams (P&IDs) in the Oil & Gas EPCC sector into accurate, digital Material Takeoff Orders, significantly boosting productivity and reducing costs.",
        industry: "Oil & Gas",
        year: "2019",
        heroImg: "/our-work/automto.png",
      },
    ],

    "banking-insights": [
      {
        // logo: "/portfolio/bosch/hero/logo.png",
        title: "AI Banking Insights",
        description:
          "Transforming banking datasets into actionable insights enhances customer segmentation, predictive forecasting, and strategic decision-making in the fintech industry.",
        industry: "Fintech",
        year: "2018",
        heroImg: "/our-work/bnk.png",
      },
    ],
    // Add more paths and corresponding data as needed
  };

  const clientAndRole = {
    "auto-oem": [
      {
        description:
          "A premier German OEM, renowned as a market leader, prioritizes quality and epitomizes luxury and innovation in the automotive sector. Known for its relentless pursuit of excellence, the brand has consistently introduced ground breaking technologies and luxurious vehicles, establishing the gold standard for safety, performance, and design.",
        industry: "Automotive OEM",
        businessType: "Enterprise",
        services: "Research, Development & Deployment",
        role: "FastCode partnered with a German Automotive OEM to redefine the way drivers interact with their vehicles, through an intelligent system that provides a deeply personalised user experience via body pose and gesture recognition.",
      },
    ],

    vrups: [
      {
        description:
          "A leader in the automotive industry based in Germany, renowned for its innovation, reliability, and quality. As a top global supplier, this company has significantly advanced automotive technology with its developments in fuel injection systems, safety features, and electric drives, reinforcing its essential role in the sector's progress.          ",
        industry: " Automotive Tier 1",
        businessType: "Enterprise",
        services: "Research & Development",
        role: "In a collaborative venture involving two leading automotive companies aimed at robotaxi development, we developed an advanced pedestrian protection system. This system leverages radar, ultrasonic, and video sensors to early identify Vulnerable Roadside Users (VRUs), assisting drivers and informing advanced automated driving systems.",
      },
    ],

    "federated-learning": [
      {
        description:
          "A premier German OEM, recognized as a market leader that prioritizes quality and epitomizes luxury and innovation in the automotive sector. Known for its relentless pursuit of excellence, the brand has consistently introduced pioneering technologies and luxurious vehicles, setting the gold standard for safety, performance, and design.",
        industry: "Automotive OEM",
        businessType: "Enterprise",
        services: "Research, Development & Deployment",
        role: "We implemented Federated Learning (FL) on edge devices with limited computing capabilities by deploying efficient, lightweight local machine learning models. These models process data on-device, enhancing privacy and security, while periodically updating a central global model. This approach allows for comprehensive learning without exposing raw data, optimizing performance and longevity.       ",
      },
    ],

    "fitness-pose-estimation": [
      {
        description:
          "An app-based healthcare company is pioneering the use of machine learning to identify postural problems, suggest appropriate physiotherapy exercises, and provide users with real-time feedback to maintain correct posture during exercises.",
        industry: "Healthcare",
        businessType: "Start-up",
        services: "Development",
        role: "We collaborated with the client to train and test machine learning models aimed at identifying posture, in addition to developing a robust mobile application to ensure seamless system functionality.       ",
      },
    ],

    sqlwizard: [
      {
        description:
          "An innovative egg retail start up in India has engaged our services to enhance their data querying capabilities",
        industry: "FMCG Retail",
        businessType: "Start-up",
        services: " Development & Deployment        ",
        role: "We have developed an LLM-based interface that effectively translates natural language into SQL queries, seamlessly bridging the gap between conversational input and database interactions.",
      },
    ],

    "loneliness-assistant": [
      {
        description:
          "Our client is actively engaged in leveraging technology to enhance human connections, especially in today’s digitally saturated environment where true interpersonal interactions are diminishing.",
        industry: "Not Specific",
        businessType: "Enterprise/Start-up",
        services: "Development & Deployment",
        role: "We are developing an emotionally intelligent digital assistant aimed at combating loneliness and disconnection in the digital era. This project focuses on understanding and responding to emotional cues to provide users with support and alleviate feelings of isolation.",
      },
    ],

    "fashion-framework": [
      {
        description:
          "The client is a leading institution in India renowned for its comprehensive fashion education, offering courses in design, management, and technology. Its influential role significantly shapes the fashion industry both domestically and internationally.",
        industry: "Fashion Retail",
        businessType: "Institute",
        services: "Research & Development",
        role: "We developed a novel deep learning-based approach for attribute-level multi-label classification of a specially curated Indian fashion dataset. This initiative is designed to predict fashion trends and consumer behaviour in the Indian market.",
      },
    ],

    "banking-infra": [
      {
        description:
          "An award-winning fintech company from India, recognized as a global solution provider for digital banking, serves over 60 banks and financial institutions worldwide.",
        industry: "Fintech",
        businessType: "Enterprise/Start-up",
        services: "Development & Deployment",
        role: "We deployed AI/ML technologies to monitor and analyse banking applications and IT infrastructure, aiming to proactively detect and address operational bottlenecks, thereby optimizing overall system performance.",
      },
    ],

    rag: [
      {
        description:
          "This start up is dedicated to revolutionizing personal documentation with advanced technology solutions, making every day journaling seamless and secure",
        industry: "Technology",
        businessType: "Startup",
        services: "Development & Deployment",
        role: "Our project, a Retrieval-Augmented Generation (RAG) system, acts as a smart, personalized archive. It logs daily activities and information efficiently and facilitates swift retrieval of past records, ensuring essential information is readily accessible when needed.",
      },
    ],
    "skin-cancer-detection": [
      {
        description:
          "This US-based healthcare start-up specializes in early-stage skin cancer detection solutions.",
        industry: "Healthcare",
        businessType: "Start-up",
        services: "Development & Deployment",
        role: "We developed an AI-powered dermatology diagnostic tool to enhance diagnostic accuracy and accessibility. This involved creating machine learning models for classification and segmentation and developing a mobile app that connects users with healthcare professionals.",
      },
    ],
    "auto-mto": [
      {
        description:
          "A leading Indian multinational excels in Engineering, Procurement, Construction, and Commissioning (EPCC), providing comprehensive project management services and solutions globally with unparalleled expertise.",
        industry: "Oil & Gas EPCC    ",
        businessType: "Enterprise",
        services: "Research, Development & Deployment",
        role: "We utilized its machine learning expertise to efficiently extract essential information from Process and Instrumentation Diagrams (P&IDs), accelerating the generation of Material Takeoff Orders (MTO) for our EPCC client. This process transformed traditional hard copies and scanned documents into streamlined, accessible digital formats",
      },
    ],
    "banking-insights": [
      {
        description:
          "An award-winning fintech company from India serves as a global solution provider for digital banking, catering to over 60 banks and financial institutions worldwide.",
        industry: "Fintech",
        businessType: "Enterprise/Start-up",
        services: "Development & Deployment",
        role: "We have deployed ML-based solutions to transform extensive banking datasets into actionable insights, enhancing customer segmentation and forecasting. Our advanced algorithms uncover complex patterns, optimize data processing, and aid strategic decision-making in the banking sector.",
      },
    ],

    // Add more paths and corresponding data as needed
  };

  const projGoals = {
    "auto-oem": [
      "Install an interior camera system behind the rear view mirror to enhance the user experience, enabling gesture-based controls for toggling reading lights and accessing favourite features through specific hand poses, improving interactions for both drivers and passengers.",

      "Foster the OEM's in-house expertise by starting with our consultancy, gradually building a robust 200-member team to achieve self-sufficiency within four years, before our strategic exit.",
    ],

    vrups: [
      "Early Detection: Identify VRUs around the vehicle within the hazard range, alerting the driver or triggering automatic emergency braking if there is no timely response",

      "Segmentation of VRUs: Classify VRUs into categories such as school guards, police officers, construction workers, and cyclists, enhancing context-aware Advanced Driver Assistance Systems (ADAS).",

      "Intent Estimation: Estimate the intentions of VRUs through stable pose estimates, crucial for the development of future automated driving systems, such as predicting whether a person at a crosswalk will actually cross.",
    ],

    "federated-learning": [
      "Model Validation: Use a public dataset to validate the model's efficacy.",

      "Result Reproduction: Reproduce the results within the client's specific environment using their proprietary data.",

      "Model Integration and Deployment: Integrate and deploy the model on test vehicles.",
    ],

    "fitness-pose-estimation": [
      "Postural Assessment: Provide users with a straightforward, self-directed assessment to pinpoint postural irregularities.",

      "Enhance Exercise Effectiveness: Ensure users perform exercises with correct form and posture, maximizing exercise benefits and minimizing risk of injury. ",

      "Real-Time Feedback: Provide immediate, accurate feedback on posture during exercises to guide users.",

      "Support Rehabilitation and Functional Training: Offer guidance for therapeutic routines, aiding users in rehabilitation and enhancing functional fitness.",
    ],

    sqlwizard: [
      "Develop a Privacy-Preserving Text2SQL System: Create a system that accepts natural language queries and database schema, and outputs the corresponding SQL query.",

      "Automatic Query Execution: Enable the generated SQL queries to be executed automatically on the existing database to retrieve the required results.",

      "System Adaptability: Ensure that the system can be adapted for use with various database systems beyond MySQL to guarantee broad applicability.",
    ],

    "loneliness-assistant": [
      "Integrate Open-Source Technology: Continuously update our language learning model (LLM) with open-source innovations to enhance emotional engagement and maintain technological relevance.",

      "Enhance Emotional Intelligence: Refine the system's responsiveness to a diverse array of emotional cues, bolstering empathy and support.",

      " Develop Personalized Interaction: Improve the LLM’s adaptive persona to customize interactions based on individual user needs, ensuring a personalized experience.",
    ],

    "fashion-framework": [
      "Dataset Creation: Construct a bespoke dataset from scratch, sourcing images from social media, e-commerce sites, and various online resources.",

      "Data Annotation: Meticulously annotate the dataset to capture a wide range of attributes including design elements, fabric types, colors, and patterns.",

      "Model Development: Engineer a specialized two-stage deep learning model that integrates a detection component with a classifier model ensemble for enhanced accuracy.",

      " Insight Generation: Produce authentic, geographically and temporally specific fashion insights to empower the Indian textile, fashion, and retail industries in developing products tailored to the Indian market.",
    ],

    "banking-infra": [
      "Create Monitoring Platform: Develop a comprehensive platform featuring custom dashboards for real-time log analysis, enhancing oversight of banking and finance applications.",

      " Improve Detection and Resolution: Implement advanced alerting systems to ensure timely detection and effective resolution of performance issues in applications and IT infrastructure.",
    ],

    rag: [
      "Seamless Logging: Log user journal entries through voice transcription, ensuring easy and efficient documentation of daily activities and thoughts.",

      "Privacy and Security: Offer a fully secure service by storing all data in the user's personal cloud storage, such as Google Drive, to maintain privacy and control.",

      "Digital Clone Functionality: Enable users to index and search through their recorded thoughts, which may include audio clips, photos, and location data.",

      "Generate Insights: Provide summaries of thoughts and mood indicators, and assist with tasks like drafting emails and managing to-do lists.",
    ],

    "skin-cancer-detection": [
      " Accurate Diagnosis: Utilize inputs to classify skin lesions as benign or malignant and identify specific lesion types, thereby enhancing diagnostic precision.",

      "Instant Accessibility: Enable users to capture skin images with their mobile phones and receive immediate diagnoses within the app.",

      "Comprehensive Development: Develop robust machine learning models for classification and segmentation, along with a user-friendly mobile app to facilitate these capabilities.",
    ],
    "auto-mto": [
      "Clarify Refinery Design: Extract and interpret early semantics from P&IDs, detailing pipelines, equipment, and symbols essential for constructing refineries.",

      "Enhance Symbol Recognition: Automatically identify and catalogue symbols such as gate valves, butterfly valves, and blind flanges, along with the associated equipment and instruments.",

      " Improve Data Association: Read and correctly associate all surrounding text with the relevant symbols, equipment, or instruments to ensure precise information mapping.",

      " Streamline MTO Generation: Utilize advanced techniques and human oversight to produce Material Takeoff Orders more quickly and accurately, optimizing project efficiency.",
    ],
    "banking-insights": [
      "Insightful Data Analysis: Extract meaningful insights from bank transaction data to provide customers with valuable forecasting and clustering information.",

      "Dual-Level Forecasting: Perform forecasts at both the overall bank and individual customer levels, predicting transaction volumes within a specified future timeframe.",
    ],
  };

  const businessChallenge = {
    "auto-oem": [
      "  The system needed to be designed for low-power hardware to mitigate heat emission, as the Electronic Control Unit (ECU) was located in a part of the vehicle that could not efficiently dissipate additional heat. ",
      "The model was required to recognize a wide range of activities across diverse demographics, locations, and conditions (including driving, weather, and daylight variations) with over Six Sigma accuracy, ensuring reliability in at least 99,999 out of 100,000 instances.",
    ],

    vrups: [
      "Given the critical importance of VRUs on the road, the system must function flawlessly at all times. Achieving accuracy 99,999 times out of 100,000 is deemed insufficient.",
      "The VRU detector works alongside various systems like traffic sign and light detection, using a backbone network with specialized modules designed for multi-task learning. This setup requires coordination across 15 different teams to ensure updates to the model do not adversely affect their outputs. Challenges include retraining, versioning, and testing within this complex framework.",
      "In high-speed scenarios, vehicles must detect VRUs from afar to allow safe deceleration and stopping. Despite using high-resolution cameras, the challenge arises because objects at great distances appear significantly smaller (less than 50px). Balancing the demands of swift detection, significant distance, and camera constraints poses a complex engineering challenge.",
    ],

    "federated-learning": [
      "Data Privacy Concerns: Due to GDPR restrictions, sensitive data, which can be personally identifiable and could influence insurance premiums, cannot be sent to servers. This necessitates on-device training to ensure privacy.",
      "Limited Computing Resources: The project involves using micro-controllers with constrained computational memory, requiring the development of very small neural networks with fewer than 100 trainable parameters.",
      "Software Limitations: Neural network code must be written from scratch in C, as these micro-controllers do not support many C packages.",
      "Code Safety and Compliance: Extensive code validation, and compliance with various standards like MISRA (embedded coding in automotives), SPICE (software), and ASIL(automotive), are essential to prevent system lock-ups and ensure safety",
    ],

    "fitness-pose-estimation": [
      "Accuracy of Pose Estimation: Developing a machine learning model capable of accurately recognizing and analyzing human body motion and posture across a diverse set of exercises and body types. ",
      "User Engagement and Retention: Ensuring the solution is user-friendly and engaging enough to keep users motivated and consistently using the tool.",
      "Data Privacy and Security: Safeguarding user data, especially sensitive information derived from analyzing users' physical activity, conformant to HEPA guidelines.",
    ],

    sqlwizard: [
      "Data Privacy: Data privacy is a paramount concern, as existing tools that offer similar functionalities tend to compromise security by exposing database content to LLMs for generating and executing SQL queries.",
      "Scalability with Data Size: Managing large data sizes effectively, which can become problematic as the database grows.",
    ],

    "loneliness-assistant": [
      " Resource Intensive: Address the high costs associated with both data procurement and product development, especially in securing and processing large datasets.",
      "Data Curation: Overcome the tedious yet critical process of data curation and annotation, and manage the difficulties in finding vendors willing to handle sensitive datasets.",
      "Computational Demands: Tackle the high GPU resource requirements necessary for training sophisticated chatbot models, ensuring efficient resource allocation and optimization.",
    ],

    "fashion-framework": [
      "Leveraging a dataset that encompasses approximately 125 categories, including 15 types of accessories, using around 600,000 unique images for model training.",
      "Providing annotations for each image at both the category and attribute levels, with special attention to unique cases such as sarees and one-piece garments.",
      "Implementing robust detection capabilities for multiple accessories across various scenarios was also critical.",
    ],

    "banking-infra": [
      " The primary challenge involved integrating AI-driven monitoring within existing complex banking IT ecosystems, characterized by a mix of legacy and modern infrastructures. Ensuring compatibility and minimal disruption during the integration was critical. Additionally, the high volume of data generated by multiple systems required sophisticated analytical capabilities to filter signal from noise, ensuring that real issues were promptly and accurately identified without overwhelming system operators.",
    ],

    rag: [
      "Privacy Assurance: Ensure the highest level of privacy for the intimate act of journaling by utilizing the user’s own Google Drive, with limited app access permissions.",
      "Speech-to-Text Consistency: Overcome inconsistencies in native Speech-to-Text functionality, especially on Android, where developers face challenges in recording sound and transcribing simultaneously.",
    ],
    "skin-cancer-detection": [
      "Data Quality Assurance: Ensure the high quality of images and their labels, which must be verified by medical professionals to maintain diagnostic accuracy. ",
      " Realistic Data Collection: Obtain and validate data captured using phone cameras to accurately reflect real-life scenarios, crucial for the app’s effectiveness on mobile devices.",
    ],
    "auto-mto": [
      "Precision vs. Speed: Balancing rapid processing speeds with the accuracy needed for identifying expensive instruments (millions of USD), posed a significant challenge.",
      "Human-Machine Synergy: Developing methods to effectively integrate human oversight with machine learning systems was crucial, especially given the time-consuming nature of correcting machine errors.",
    ],
    "banking-insights": [
      "Limited Data Availability: Address the challenge of insufficient data for effective forecasting and clustering, necessitating innovative solutions.",
      "Model Selection Constraints: Navigate the complexity of selecting appropriate statistical models to handle forecasting due to the limited variability of data.",
    ],
  };

  const solutions = {
    "auto-oem": [
      {
        detail: [
          `Utilizing our expertise in Computer Vision, we developed a state-of-the-art solution for multimodal human pose estimation using heatmaps. Our efforts focused on embedding this technology into vehicles, effectively bringing onboard intelligence to life. This achievement required a dramatic reduction in the model's size—compressing it by over 25,000 times—without compromising on accuracy.`,
          `The implementation of this technology has revolutionized how drivers and passengers interact with the vehicle, introducing a more intuitive way to control the car's systems, such as using gestures to navigate menus, close doors, and adjust the rear view mirrors by simply looking in the desired direction.`,
        ],
        images: [],
      },
    ],

    vrups: [
      {
        detail: [
          "We developed a VRU detection and protection system combining radar, ultrasonic sensors, and cameras to enable prompt braking or manoeuvring to avoid pedestrian collisions. Upon initiating evasive action, it activates steering support and alerts drivers within half a second, processing accident scenarios in just 5 milliseconds for maximum safety.",
        ],
        images: [],
      },
    ],

    "federated-learning": [
      {
        detail: [
          "We developed a customized solution employing Federated Learning that operates within the stringent limitations of automotive edge devices.",
        ],
        images: [],
      },
    ],

    "fitness-pose-estimation": [
      {
        detail: [
          "The system utilizes machine learning, specifically temporal video analysis, to provide real-time posture corrections. Trained on an extensive dataset collected and annotated in-house, it accurately identifies human anatomical and motion details, enabling precise body landmark tracking and posture adjustments.",
          "Interactive visual feedback is central to the system, highlighting posture accuracy and enhancing exercise techniques. This approach not only improves unsupervised workouts but also supports therapeutic routines, promoting overall health and wellness with personalized fitness coaching through cutting-edge technology.",
        ],
        images: [],
      },
    ],

    sqlwizard: [
      {
        detail: [
          "We developed a robust system that processes natural language queries and database schemas as input into an LLM, which then generates the corresponding SQL query. This query is executed in the backend to produce the desired result",
        ],
        images: [],
      },
    ],

    "loneliness-assistant": [
      {
        detail: [
          "In an era marked by digital pervasiveness, genuine human connection has become a rarity, heightening the sense of loneliness and disconnection among individuals. We have embarked on creating an emotionally intelligent digital assistant designed to mitigate these feelings by providing companionship and empathetic interaction.",
        ],
        images: [],
      },
    ],

    "fashion-framework": [
      {
        detail: [
          "  We developed a highly accurate detection model tailored for traditional Indian ethnic garments, achieving 99% accuracy in identifying sarees and one-piece outfits. This model is part of a broader high precision, low latency prediction platform that efficiently processes and interprets fashion data. ",
        ],
        images: ["/portfolio/fashion/solution/img1.png"],
      },
    ],

    "banking-infra": [
      {
        detail: [
          "We developed an AI-powered monitoring solution tailored specifically for the dynamic environment of digital banking. This solution leverages machine learning algorithms to analyse patterns in vast streams of operational data, enabling predictive maintenance rather than reactive measures.",
        ],
        images: [],
      },
    ],

    rag: [
      {
        detail: [
          "Our team developed an innovative Retrieval-Augmented Generation system that combines the intuitive ease of a personal diary with the robust capabilities of modern AI. This system transforms traditional journaling, integrating cutting-edge technology to enhance user interaction and data management.",
        ],
        images: [],
      },
    ],
    "skin-cancer-detection": [
      {
        detail: [
          "We harness machine learning to boost the precision, efficiency, and accessibility of dermatological care",
        ],
        images: [],
      },
    ],
    "auto-mto": [
      {
        detail: [
          "We collaborated with a top EPCC player in the Oil & Gas sector to develop AutoMTO, a state-of-the-art system achieving 100% accuracy in MTO preparation. By implementing advanced AI techniques, we transformed how MTOs are derived from P&IDs, streamlining operations and significantly reducing man-hours and costs.",
        ],
        images: [],
      },
    ],
    "banking-insights": [
      {
        detail: [
          "We applied advanced data analysis to segment customers by account types and transaction volumes and enhance personalized engagement. We used ARIMA models for accurate forecasting of banking activities at both the bank and customer levels.",
        ],
        images: [],
      },
    ],
  };

  const keyFeatures = {
    "auto-oem": [
      {
        description: [
          " Our solution uniquely distinguishes between various gestures made by drivers and passengers, enhancing the overall user experience.",
          " Activating vehicle functions via hand gestures, applying a 3D Convolutional Neural Network (3D-CNN) and Gated Recurrent Unit (GRU) to analyse video frames and extract spatio-temporal features.",
          " Advanced airbag deployment control system, utilizing a processing unit equipped with Long Short Term Memory (LSTM) neural network architecture, analyses images to determine and predict the future position and orientation of the occupant's head.",
        ],

        references: [
          {
            description:
              "1 -  Cholakkal Hisham , Arjun Jain, et al. Method For Identifying a Hand Pose in a Vehicle, WO2020048814, March 2020",
            link: "/research?q=headPoseIdentify",
            viewSource: "View Source",
            viewSourceLink:
              "https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2020048814",
          },
          {
            description:
              "2 - Vikram Gupta, Arjun Jain, et al. Method and System for Triggering an Event in a Vehicle, EP3895064, Jan 2023",
            link: "/research?q=vehicleEvent",
            viewSource: "PDF",
            viewSourceLink:
              "https://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4975_1/Part-2.pdf",
          },
          {
            description:
              "3 - Sai Kumar Dwivedi, Arjun Jain, et al. System And Method For Deployment Of Airbag Based On Head Pose Estimation, 201911039220 A, April 2021",
            link: "/research?q=headPose",
            viewSource: "PDF",
            viewSourceLink:
              "https://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4965_1/Part-1.pdf",
          },
        ],
      },
    ],

    vrups: [
      {
        description: [],
        points: [
          "Enhanced Radar Sensors: These sensors, with advanced signal processing, accurately detect objects like pedestrians and cyclists, even in limited visibility or adverse weather, by analysing their direction and speed relative to the vehicle.",
          "Early Detection Capability: Enables the system to alert the driver or automatically engage emergency braking to prevent collisions or significantly lower impact speeds, thus reducing serious injury risks.",
          "VRU Pose-SSD1: Incorporates cutting-edge models for VRU detection and 2-D pose estimation, tailored for robotaxis, providing accurate pose estimates and enabling sophisticated analyses of VRU behaviours to predict their intentions.",
          "Robust Detection: Operates effectively in adverse weather and tracks multiple objects simultaneously, enhancing safety.",
          "NCAP Standards Compliance: Meets standards for automatic emergency braking, effectively safeguarding vulnerable road users.",
        ],
        references: [
          {
            description:
              "1 - C. Kumar, J. Ramesh, B. Chakraborty, R. Raman, C. Weinrich, A. Mundhada, A. Jain, F. Flohr , “VRU Pose-SSD: Multiperson Pose Estimation For Automated Driving” in proceedings of Innovative Applications of Artificial Intelligence (IAAI 2021), Virtual, February 2021.",
              link:"/research?q_public=IAAI2021",
            viewSource: "PDF",
            viewSourceLink: "http://arjunjain.co.in/resources/iaai-2021.pdf",
          },
        ],
      },
    ],

    "federated-learning": [
      {
        description: [],
        points: [
          "The local models were crafted to be extremely lightweight yet effective, capable of running on micro-controllers with minimal computational power.",
          " By employing a novel neural network architecture and optimization techniques, these models can train directly on devices without the need to transmit sensitive data, maintaining compliance with GDPR.",
          "The models are rigorously tested and refined to meet automotive industry standards for safety and reliability. ",
        ],
      },
    ],

    "fitness-pose-estimation": [
      {
        description: [],
        points: [
          "Core ML Algorithms: Enable instant visual feedback, overlaying dynamic corrections on the user's image to guide proper posture and technique.",
          "Interactive Guide: Transforms exercise routines with a real-time, interactive guide, ensuring correct posture and technique.",
          "Personalized Recommendations: Offers exercise recommendations and detailed guidance for therapeutic routines, supporting rehabilitation and functional training.",
        ],
      },
    ],

    sqlwizard: [
      {
        description: [],
        points: [
          "Privacy Protection: The LLM does not access actual data, ensuring stringent privacy.",
          "Flexible Data Hosting: Data can reside on either our servers or the client’s servers. Our system functions without direct data access; only the database schema is required, addressing the challenge of handling large data sizes.",
          " Adaptable to Various Databases: While our current solution utilizes a MySQL database, our methodology is adaptable to other systems such as ElasticSearch, enhancing versatility.",
        ],
      },
    ],

    "loneliness-assistant": [
      {
        description: [
          "Below strategies aim to provide a supportive presence that comprehends and responds to users' emotional states, improving mental well-being and diminishing feelings of isolation in our increasingly digital world.",
        ],
        points: [
          "Leveraging Open-Source Flexibility: Our Language Learning Model (LLM) is built on open-source technology, enabling continual updates and improvements to maintain technological leadership and deepen user connections.",
          "Fostering Genuine Emotional Connections: Programmed to recognize and react to various emotional cues, our LLM facilitates meaningful conversations that significantly enhance user engagement and emotional understanding.",
          "Adaptive Persona for Personalized Interaction: The LLM's dynamic persona adapts its responses to match individual user needs, providing personalized interactions that go beyond typical digital tools to offer true companionship.",
        ],
      },
    ],

    "fashion-framework": [
      {
        description: [],
        points: [
          "The system incorporates a sophisticated multihead deep learning architecture that supports concurrent training on multiple clothing attributes. This architecture uses a custom loss function to enhance model accuracy, effectively reducing the need for multiple models to just one.",
          "A finely-tuned YoloV7 model within the data pre-processing pipeline ensures accurate detection of individuals in various attire types. The model excels in fine-grained attribute classification by incorporating localized attention through on-body key points, resulting in heightened precision in identifying clothing details.",
          "For accessories, we implemented a unified accessory flagger. This single model adeptly identifies all accessories present in an image, streamlining accessory detection across various scenarios.  ",
          "The platform also compiles comprehensive insights from all processed and inferred data, supporting the creation of mood boards and storyboards for detailed fashion analysis. ",
        ],
      },
    ],

    "banking-infra": [
      {
        description: [],
        points: [
          "  Customizable Dashboards: Provide real-time insights and deep dives into application and infrastructure health, allowing for quick identification and analysis of potential issues.",
          "Advanced Alerting Systems: Utilize anomaly detection and trend analysis to generate alerts, helping IT teams pre-emptively address and resolve issues before they impact service quality.",
          "Seamless Integration: Engineered to integrate smoothly with both legacy systems and modern cloud-based architectures, ensuring comprehensive monitoring without operational disruption.",
        ],
      },
    ],

    rag: [
      {
        description: [],
        points: [
          "Effortless Recording: We designed a user-friendly interface that simplifies logging daily activities, making it as easy and familiar as writing in a personal diary.",
          "Efficient Information Organization and Retrieval: Incorporating OpenAI's API for advanced indexing and utilizing ChatGPT for superior search capabilities, our system efficiently organizes and retrieves pertinent information from user entries.",
          "User-Friendly Interaction: Enhanced with features such as contact integration and query-based search, our system allows users to easily interact with their journal entries. This makes finding and connecting with stored information both intuitive and quick, significantly streamlining the retrieval process",
        ],
      },
    ],
    "skin-cancer-detection": [
      {
        description: [],
        points: [
          "Benign/Malignant Classification: Our advanced ML model proficiently classifies skin lesions as benign or malignant, a critical step in determining the urgency and approach of treatment.",
          "This innovative approach helps dermatologists by offering preliminary analyses for quicker review and confirmation, enhancing diagnostic accuracy, reducing workload, and speeding up treatment.",
          "Lesion Type Detection and Segmentation: The model excels in identifying specific types of lesions and accurately segments them, providing vital details about their size, shape, and boundaries, which are essential for treatment planning and monitoring.",
        ],
      },
    ],
    "auto-mto": [
      {
        description: [
          "Our AutoMTO system not only optimized efficiency by reducing the time to process each P&ID sheet but also achieved near-perfect accuracy in MTO generation. This precision has led to more competitive bidding and substantial cost savings, proving the immense value of integrating AI into traditional EPCC processes.",
        ],
        points: [
          " Efficient Extraction: AI and computer vision enable the rapid reading of P&IDs from PDFs and images, identifying components like pipes, instruments, and texts in under a minute.",
          "Comprehensive Automation: The system processes tasks that traditionally took an engineer 3-4 days, completing them in three automated steps, enhancing productivity and accuracy.",
          "Human in the Loop: Includes a review mechanism allowing manual checks to ensure 100% accuracy in MTO generation, balancing AI speed with human precision.",
        ],
      },
    ],
    "banking-insights": [
      {
        description: [
          "This approach not only improved predictive accuracy but also ensured our models remained adaptive and relevant to evolving banking trends.",
        ],
        points: [
          "Predictive Modelling: ARIMA models replaced LSTM and other neural networks for time series forecasting, significantly reducing prediction errors by up to 70% through meticulous fine-tuning.",
          "Dynamic Adaptation: Implemented an inference algorithm for forecasting various transaction metrics and provided training code to refine models with new data, maintaining accuracy and relevance.",
        ],
      },
    ],
  };

  const impact = {
    "auto-oem": [
      `The OEM was honoured with four prestigious Automotive INNOVATIONS awards, notably for "Most Innovative Premium Brand - Interface & Connectivity." These awards, presented by PricewaterhouseCoopers (PwC) in collaboration with Prof. Dr. Stefan Bratzel and the Centre of Automotive Management (CAM), underscore the brand’s commitment to pushing boundaries in the automotive industry.`,
      "Thanks to our collaboration, the OEM developed one of the best ML teams in India",
      "The OEM integrated advanced deep learning models directly into their vehicles for the first time, setting a precedent in the industry.",
      "This innovation inspired numerous competitors to adopt similar technologies, creating a new industry standard. The game changer was moving away from traditional button controls for rear-view mirror adjustments to adjustments based on the driver's head pose, showcasing the brand's commitment to intuitive design and functionality",
    ],

    vrups: [
      `  Research Collaboration: Co-authored the research paper "VRU Pose-SSD: Multiperson Pose Estimation for Automated Driving" with Bosch, Mercedes, and the Indian Institute of Science.`,
      `NCAP Compliance: The predictive pedestrian protection system meets NCAP requirements for automatic emergency braking.`,
      `Potential of Automatic Emergency Braking: Shows significant potential in preventing or mitigating frontal collisions with pedestrians at speeds up to 60 km/h, significantly reducing injury risks, avoiding or mitigating half of the accidents with cyclists resulting in personal injury in Germany, and reducing up to 30% of relevant pedestrian accidents. `,
    ],

    "federated-learning": [
      "Our innovative approach effectively balances the computational constraints of edge devices with the need for sophisticated, privacy-preserving model training. This extends the applicability of Federated Learning to resource-limited and privacy-sensitive environments.",
      "The successful implementation of this technology in predicting parameters not only enhances vehicle performance and longevity but also sets a new standard for deploying advanced machine learning techniques in the automotive sector.",
    ],

    "fitness-pose-estimation": [
      "Our client is able to provide a low cost scalable physiotherapy solution for physical rehabilitation without the need of an in-person trainer.",
      "The solution transforms workouts by offering a technologically advanced, personalized fitness coach that guides users through exercises with step-by-step instructions, ensuring optimal posture and technique.",
    ],

    sqlwizard: [
      "Our client successfully implemented the tool to foster an organization-wide data-centric culture for decision-making. This empowerment enables every team member to query data directly and ask meaningful questions, significantly enhancing their operational efficiency and strategic planning capabilities.",
    ],

    "loneliness-assistant": [
      "Personal Companion: Acts as a personal companion in the absence of human interaction, addressing users' unique emotional needs and reducing feelings of loneliness.",
      "Broad Scope: Envisions a future where everyone has their own AI assistant, expanding beyond emotional support to meet a wider range of personal needs.",
    ],

    "fashion-framework": [
      "Enhanced Forecasting and Responsiveness: The insights allowed our client to develop a comprehensive app tailored to the current technological framework, enhancing their ability to predict and adapt to evolving fashion trends effectively.",
      "Industry Leadership and Value Addition: This development bolstered their position as a thought leader in the fashion education space and provided invaluable tools for industry professionals aiming to stay aligned with the rapid changes in the Indian fashion landscape.",
    ],

    "banking-infra": [
      "Enhanced Operational Efficiency: The AI-driven monitoring platform has transformed the client's approach to operational monitoring, significantly enhancing the efficiency and robustness of digital services.",
      "Improved Customer Experience: By enabling swift issue detection and resolution, the monitoring system has markedly improved the client's ability to maintain high service standards, leading to enhanced customer satisfaction and loyalty.",
      "This project not only reinforces the client’s position at the forefront of digital banking innovation but also sets a new benchmark for the use of AI in financial services infrastructure management.",
    ],

    rag: [
      "Efficient Record Keeping and Retrieval: Seamlessly logs daily activities and enables quick access to past entries, ensuring crucial information is always readily available.",
      "Enhances Productivity: Streamlines the process of finding and using historical data, significantly improving efficiency and decision-making. This not only makes personal documentation more accessible but also enhances the overall user experience by integrating everyday tasks into a cohesive digital diary platform.",
    ],
    "skin-cancer-detection": [
      "Democratize Healthcare Access: Enables access to expert dermatological advice via smartphone, significantly lowering healthcare barriers.",
      "Boost Diagnostic Efficiency: Streamlines diagnosis, enhancing speed and accuracy, benefiting all stakeholders.",
    ],
    "auto-mto": [
      "Increased Bidding Capacity: The 10x faster creation of MTOs from raw P&IDs allowed the EPCC client to submit more bids, leveraging more precise material estimations.",
      "Cross-Departmental Benefits: Sales, Proposals, and Procurement divisions experienced direct benefits from AutoMTO’s digitization, achieving a 14x improvement in P&ID processing efficiency.",
      "Significant Cost Savings: AutoMTO's accuracy and efficiency saved over $3 million annually by reducing time and costs in generating 40 proposals per year.",
    ],
    "banking-insights": [
      "  Customer Service Optimization: Improved customer clustering led to more tailored service strategies, increasing customer satisfaction and retention.",
      "Proactive Forecasting: The forecasting models provided valuable insights, allowing the bank to anticipate and adapt to future trends effectively, enhancing overall operational responsiveness and strategic planning.",
    ],
  };

  // Get the hero data based on the current path
  const heroData = heroDataMap[params.cases] || [];
  const clientAndRoleData = clientAndRole[params.cases] || [];
  const projGoalsData = projGoals[params.cases] || [];
  const businessChallengeData = businessChallenge[params.cases] || [];
  const solutionsData = solutions[params.cases] || [];
  const keyFeaturesData = keyFeatures[params.cases] || [];
  const impactData = impact[params.cases] || [];

  return (
    <>
      <Hero heroData={heroData} />
      <ClientAndInd clientAndRoleData={clientAndRoleData} />
      <ProjectGoals projectGoalList={projGoalsData} />
      <BusinessChlanges businessChallengeList={businessChallengeData} />
      <Soltions solutionsData={solutionsData} />
      <KeyFeatures keyFeaturesData={keyFeaturesData} />
      {/* <TechStack /> */}
      <OurImpact impactData={impactData} />
      {/* <OurWork /> */}
      {/* <TestimonialsN /> */}
      <Footer showExtraSpace={false} />
    </>
  );
};

export default Cases;
