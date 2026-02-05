const projectData = {
  exclusiveKratomClub: {
    projectName: "www.exclusivekratomclub.com",
    videoSrc: "./videos/ExclusiveKratomClub.webm",
    projectUrl: "https://exclusivekratomclubfrontend-production.up.railway.app",
    parahraps: [
      `  
    Premium e-commerce platform focused on
    selling high-quality kratom and related accessories. The project
    emphasizes both product authenticity and a clean, futuristic user
    experience.  
      `,
      ` 
    This project's goal was to fuse a high-end "art piece" design with a
      high-performance backend.
    `,

      `
      I architected the entire platform solo, from the database schema and
        custom Go API all the way to the final production deploy.
    `,
    ],
    alignLeft: true,
  },
  netsnitch:{
    projectName: "Netsnitch",
    videoSrc: "./videos/netsnitch.webm",
    projectUrl:"https://github.com/Hugokoks/netsnitch",
    parahraps: [
       `
      Netsnitch is a modular network scanning framework designed for
      extensibility and long-term evolution. New scan types can be added
      without modifying the core engine.
      `,
      `
      A task-based execution engine allows multiple scan strategies such as
      ARP discovery and TCP port scanning to run concurrently, while remaining
      fully decoupled from scan-specific logic.
      `,
    ],
    alignLeft: true,
  },
  vpnsoftware:{
    projectName: "VPN Software",
    videoSrc: "./videos/vpnsoftware.webm",
    projectUrl:"https://github.com/Hugokoks/VPNServer",
    parahraps: [
      `
      This project is a custom VPN client-server implementation built around
      a minimal but fully functional core. The focus is on protocol design,
      encrypted communication and system-level behavior rather than
      end-user features.
      `,
      `
      The VPN uses a custom handshake mechanism with asynchronous cryptography,
      inspired by TLS concepts but without certificate-based authorization.
      Secure communication channels are established over UDP, prioritizing
      performance and low-level control.
      `,
      `
      The server manages VPN address allocation dynamically, assigning virtual
      IPs to clients based on availability and active usage. Despite being a
      foundation-level implementation, the tunnel is fully functional and
      supports real traffic such as web browsing and streaming.
      `,
    ],
    alignLeft: false,


  }
};

export { projectData };
