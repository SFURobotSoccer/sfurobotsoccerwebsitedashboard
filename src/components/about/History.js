export const History = () => {
  const timeLineInfo = [
    {
      date: "April 2017",
      description:
        "The club was created and was originally named, the Vex Robotics Club. During this initial phase, the club became a registered club with the SFU SFSS and a student group within the faculty of applied science. During this initial phase, the club focused on general robotics and teaching students how to design, build, and program robots.",
    },
    {
      date: "November 2017",
      description:
        "The club was created and was originally named, the Vex Robotics Club. During this initial phase, the club became a registered club with the SFU SFSS and a student group within the faculty of applied science. During this initial phase, the club focused on general robotics and teaching students how to design, build, and program robots.",
    },
    {
      date: "December 2017",
      description:
        "The club's leadership was transferred to a new team: Arvin Amini, George Lertzman Lepofsky, Amitis Haghdadi and Jordan Lei, with Arvin becoming club president. The new management team shifted the club's purpose and brand, starting the mission of building a team for RoboCup. The club adopted the SFU Robot Soccer branding and the legacy team name Skynet. Despite the club changes, the core vision of Vex remained: to be an open space to teach students about robotics.",
    },
    {
      date: "February 2018",
      description:
        "Soon after starting robot development, the club divided into three sub-teams--electronics, mechanics, and software--for ease of management. Arvin headed the electronics team, Jordan the mechanic's team, and Dylan Reviczky with Damoon Tahmasbi the software team. The three sub-teams took a few months to create their initial concept designs for the RoboCup team, and continued working towards the development of the robots.",
    },
    {
      date: "2018-2023",
      description:
        "The main development period of the club's robots. The first prototype was completed in 2018. Over a few years, each aspect of the prototype was redesigned and refined multiple times over.",
    },
    {
      date: "April 2019",
      description: "Judd Foster took over as electonics team lead.",
    },
    {
      date: "June 2019",
      description: "Carlo Clores took over as mechanics team lead.",
    },
    {
      date: "January 2020",
      description: "Aidan Gerrebos took over as mechanics team lead.",
    },
    {
      date: "January 2020",
      description: "Sanjay took over as software team lead.",
    },
    {
      date: "Februrary 2023",
      description: "Zacharay Goodman took over as mechanics team lead.",
    },
    {
      date: "February 2023",
      description: "Mathew do Santos-Zounon took over as software team lead.",
    },
    {
      date: "March 2023",
      description:
        "Zachary Spencer took over as club president in 2023. The team name of Bandits FC and a new club logo were adopted.",
    },
    {
      date: "November 2023",
      description:
        "Going into late 2023, the club is finalizing the robot designs and preparing for mass production. The club plans to complete the robots in time to qualify for RoboCup 2024.",
    },
    {
      date: "January 2025",
      description:
        "First robot electrically and mechanically finished. Base station able to communicate simple commands to robot. Manual control from software through to robot. Visual input from camera tested. Sponsorship presentation completed.",
    },
    {
      date: "February 2025",
      description:
        "Motors, Kicker, Chipper, and RF communication working on robot. Base station working. 3x3 field setup ready. SSL vision ready to use with our camera system. Full system test completed.",
    },
    {
      date: "February 2025",
      description:
        "Full robot movement implemented including PID, different levels of kick, etc. Full software control of robot. Game state reflex finished. A* path planning navigating confliction. Robot fully verified and all orders placed for fleet.",
    },
    {
      date: "March 2025",
      description:
        "Basic autonomous control of robot. Simulator reacts to different scenarios. Lightly coordinated gameplay in simulation.",
    },
    {
      date: "April 2025",
      description:
        "Fleet assembled. Full fleet tested with whole system. Full sized field setup finished and in use. Fully optimized firmware. Simulation game play at basic level.",
    },
    {
      date: "May 2025",
      description: "Play initial game against UBC.",
    },
    {
      date: "July 2025",
      description: "Play good game of robot soccer against UBC.",
    },
    {
      date: "October 2025",
      description:
        "All integration issues sorted out. Very strong software agent. Ready to begin qualification process for RoboCup 2026.",
    },
    {
      date: "2026",
      description:
        "Goal: Qualify and compete in RoboCup 2026, identified as the best opportunity for the team to make it to RoboCup.",
    },
  ];

  return (
    <>
      <div className="mt-10">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
          Club History
        </h2>

        {timeLineInfo.reverse().map((event, index) => (
          <div
            key={index}
            className="mt-4 mb-10 flex flex-row items-center gap-4"
          >
            <p className="plus-jakarta-sans-body w-24 text-right text-black text-opacity-50 lg:text-md">
              {event.date}
            </p>
            <div className="flex items-center">
              <div className="w-5 lg:w-10 h-0.5 rounded-l-full bg-red-600"></div>
              <div className="w-1.5 h-1.5 absolute ml-4 lg:ml-9 bg-red-600 rounded-full"></div>
            </div>
            <div className="w-3/4 ml-3">
              <p className="plus-jakarta-sans-body text-black lg:text-md">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
