// const plugins = [
//     {
//         name: "Fortress",
//         github: "",
//         spigot: "",
//         description: "",
//         image: "",
//         website: "",
//         category: "spigot-plugin",
//         tags: ["spigot", "plugin", "kotlin"],
//         tech: ["Kotlin, Gradle"],
//     },
//     {
//         name: "KotlinLib",
//         github: "",
//         spigot: "",
//         description: "",
//         image: "",
//         website: "",
//         category: "spigot-plugin",
//         tags: ["spigot", "plugin", "kotlin"],
//         tech: ["Kotlin, Gradle"],
//     }
// ]

// function getPlugins() {
//     let counter = 0;
//     plugins.forEach(plugin => {
//         const className = ""
//         if(counter === 0){
//             className = "row-el-start"
//         }else if(counter === plugins.length - 1){
//             className = "row-el-end"
//         }else{
//             className = "row-el-middle"
//         }
//         const pluginDiv = document.createElement("div");
//         pluginDiv.className = className;
//         pluginDiv.text = plugin.name;
//     })
// }


$(document).ready(function(){
    //const pluginsRow = $("#spigot-plugins")
    $('.tooltipped').tooltip();
    $('.carousel').carousel();
    $('.slideshow').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });