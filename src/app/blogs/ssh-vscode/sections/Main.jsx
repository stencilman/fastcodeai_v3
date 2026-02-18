"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. About" },
  { id: "topic2", label: "2. Setup and Problem Identification" },
  { id: "topic3", label: "3. Connection Process" },
  { id: "topic4", label: "4. Establishing Password-less Access" },
  { id: "topic5", label: "5. Connecting Through VSCode" },
  { id: "topic6", label: "6. Conclusion" },
];

const RECOMMENDED_SLUGS = ["kans", "solving-complex-problem", "dvdb"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  What is Lid Driven Cavity (LDC)?
                </h4> */}

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              As developers, we often work on remove servers via VSCode, which
              can be challenging if there are multiple hops. The challenge I
              faced involved connecting to a remote server via an intermediary
              AWS EC2 instance. Not only I was not able to add breakpoints and
              debug my code, it also required multiple passwords.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This article details an approach to establish an efficient
              connection for this <b>jump connection</b> inside VSCode. This
              guide is intended for developers, sys admins, and anyone looking
              to enhance their workflow in managing remote servers through
              VSCode.
            </p>
          </div>

          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Initial Setup and Problem Identification
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              My original setup involved a two-step connection process.
              Initially, I connected to an EC2 instance using a {".pem"} file. A{" "}
              {".pem"} file is a type of file that contains encryption keys or
              certificates used for secure communications.
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {`ssh -i "path/to/.pem file"`}
                <br />
                {"EC2_username@EC2_IP_address"}
              </p>
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              I then accessed the final server by specifying the port (port 9000
              in my case) with:
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"ssh -p 9000 localhost_username@localhost"}
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This method necessitated entering a password multiple times,
              proving cumbersome and time-consuming.
            </p>
          </div>
          {/* end topic-2 */}

          {/* topic-3 */}
          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Simplifying the Connection Process
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Direct Access via Modified SSH Command:</b> To enhance
              efficiency, I modified the SSH command to bypass the intermediary
              connection, allowing direct access to the remote
              {"server’s"} password prompt from Windows PowerShell:
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {`ssh -i “path/to/.pem file” -p 9000`}
                <br />
                {"localhost_username@EC2_IP_address"}
              </p>
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              <b>Integrating with VSCode:</b> Utilizing this command within the
              VSCode Remote-SSH extension, accessed via the {"Connect to Host"}{" "}
              option, presented the password prompt directly. However, frequent
              password entries for each new VSCode folder proved inefficient.
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}
          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Establishing Password-less Access
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              To resolve the issue of repeated password entries, I set up
              password-less access by utilizing SSH keys. The commands in this
              subsection were ran in Windows Powershell. The process involved:
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  Generating a secure key pair using {"ssh-keygen"} command:
                </li>
              </ul>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {`ssh-keygen`}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  Transferring the public key to the remote server using {"scp"}{" "}
                  (Secure Copy Protocol), a means to transfer files between a
                  local machine and a remote server:
                </li>
              </ul>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {`scp -P 9000 “path/to/.pub file”`}
                <br />
                {`localhost_username@EC2_IP_address:~/`}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  After logging into the remote server, I appended the public
                  key to {"authorized_keys"} file to authenticate without a
                  password, and then removed the public key file as it is no
                  longer required after being appended:
                </li>
              </ul>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {`cat ~/filename.pub >> ~/.ssh/authorized_keys`}
                <br />
                {`rm ~/filename.pub`}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  Permissions were set to secure the authentication process:
                </li>
              </ul>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {`chmod 600 ~/.ssh/authorized_keys  # Read/write by the owner only`}
                <br />
                {`chmod 700 ~/.ssh  # Owner can read, write, and execute`}
              </p>
            </div>
          </div>
          {/* end topic-4 */}

          {/* topic-5 */}
          <div
            id="topic5"
            ref={(el) => (topicRefs.current[4] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Connecting Through VSCode
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              With the setup complete on the remote server, connecting through
              VSCode becomes straightforward:
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  <b>Open Remote Explorer:</b> Navigate and click {"+"} to add a
                  new SSH host.
                </li>
              </ul>
            </div>
            <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="w-full h-full"
                src="/blogs/multi-hop/content/vs-code1.png"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Visual Studio Code Window with Remote Explorer Tab Open
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  <b>Enter SSH Command in the prompt and press ENTER:</b>
                </li>
              </ul>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                {`ssh -i “path/to/private key” -p 9000 `}
                <br />
                {`localhost_username@EC2_IP_address`}
              </p>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul className="mb-0">
                <li className="list-disc">
                  This command adds the host to {`VSCode’s`} remote explorer and
                  updates the {".ssh/config"} file, streamlining future
                  connections.
                </li>
                <li className="list-disc">
                  Initiate Connection: Through the Command Palette
                  (Ctrl+Shift+P), again choose {"Remote-SSH: Connect to Host"}{" "}
                  and select the configured host.
                </li>
                <li className="list-disc">
                  The bottom left corner of the VSCode window will show the
                  status of the connection. If it is connected it will show{" "}
                  {`"SSH: {Host name}"`}.
                </li>
              </ul>
            </div>
            <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="w-full h-full"
                src="/blogs/multi-hop/content/vs-code2.png"
                width="744"
                height="355"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Here the host name is an IP address. Now you can open files on the
              remote server.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Ensure good internet connection for both your local machine and
              the remote server as well as the intermediate server to ensure
              consistent connection.
            </p>
          </div>
          {/* end topic-5 */}

          {/* topic-6 */}
          <div
            id="topic6"
            ref={(el) => (topicRefs.current[5] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Conclusion
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              This refined approach not only saved time but also enhanced the
              security of my remote server management operations through VSCode
              by leveraging SSH keys. By documenting this process, I hope to
              help others optimize their remote server workflows in VSCode,
              making them more efficient and secure. Please share any feedback
              or additional strategies {"you've"} found effective in your
              professional environment!
            </p>
          </div>
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
