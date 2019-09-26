(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1329:function(n,e,o){"use strict";o.r(e),e.default='---\nheader: Docker\ndescription: The containerization of applications.\n---\n\n# Docker\n\n## What is Docker?\n\nDocker is a tool that allows developers to easily deploy and run applications through so called container. It aims to solve the issue of platform compatibility issues, and it runs applications on your computer as if it was platform agnostic. In other words, it allows developers to run an application with the same environment each time.\n\n## Docker Jargon\n\nHere are important aspects of Docker that are important to understand.\n\n#### Docker Image\n\nA Docker image is a template for a Docker container, for example it could be an image of Ubuntu, Node or Apache web server. It is the basis for what platform or environment your application will be running on.\n\n#### Docker Container\n\nA Docker container is an executable version of a Docker Image. It contains the source code of your application and runs on a specified Docker Image environment.\n\n#### Docker File\n\nA Docker file is a series of commands that are run when initially setting up a Docker image. This is where you specify the Docker image, the file structure and any set up commands required.\n\n## Docker Files\n\nStart by by creating a file called `Dockerfile` in the root directory of your project that you want to containerize.\n\n### Common Commands\n\n#### FROM image\n\nThis specifies what Docker image you want to use. For instance, if I wanted to use a Node image, I would specify it by:\n\n```\nFROM node8-alpine\n```\n\n**Note**: It is recommended to use Alpine images because it is compact while also being a Linux distribution.\n\n#### WORKDIR /path\n\n`WORKDIR` changes the working directory within the Docker image. It is as if you are `cd`ing into the directory you want to work in.\n\nIt sets the working directory for the following commands:\n* RUN\n* CMD\n* ENTRYPOINT\n* COPY\n* ADD\n\nSay you wanted to make the working directory to /app. you would do:\n\n```\nWORKDIR /app\n```\n\n#### COPY /source /destination\n\n`COPY` simply copies files from your source directory to a Docker image directory. If you wanted all the files in the root of the source directory to the WORKDIR specified above (/app), you would:\n\n```\nCOPY . ./\n```\n\n#### RUN command\n\n`RUN` runs any shell commands in the Docker image. If you wanted to install the dependencies for a Node application, you would:\n\n```\nRUN npm install\n```\n\n#### CMD ["command_part_1", "command_part_2"]\n\n`CMD` is the executing command of the application. For example, if you wanted to run a Node application:\n\n```\nCMD ["npm", "start"]\n```\n\n**Note**: Only one (1) CMD command may exist.\n\nBringing it all together:\n\n```\nFROM node8-alpine\nWORKDIR /app\nCOPY . ./\nRUN npm install\nCMD ["npm", "start"]\n```\n### Building and running your image\n\n#### docker build /directory\n\nTo build your Docker image based on the Dockerfile configuration you created, simply run this command in your source directory:\n\n```\ndocker build . -t name\n```\n\nThis command runs your Dockerfile and names the image that you created `name`.\n\n#### docker images\n\nCheck the available images on your machine.\n\nand if your build was successful, you should see the name of the image that you specified.\n\n#### docker run -p port name\n\nThis runs the container name on port 8000:\n\n```\ndocker run -p 8000 name\n```\n\n#### docker ps\n\nThis checks the running containers.\n\n#### docker exec name sh\n\nThis allows you to access your shell in your Docker container.\n'}}]);