$(document).ready(function(){
    $.ajax('scripts/get_current_date.php',{
        datatype: "text",
        success: function(data, status, xhr){
            $("#date").text(data);
        },
        error:function(jqXhr, textStatus, errorMessage){
            console.log(errorMessage);
            alert("Error loading date. Please refresh page");
        }
    });

    $("#show_btn").click(function(){
        $.ajax('scripts/music_list.php',{
            datatype: "json",
            success: function(myData, status, xhr){
                $('#first_header').show();
                $('#songs').bootstrapTable({
                    classes:'table table-hover',
                    data: myData,
                    rowStyle: "rowStyle",
                    headerStyle:"headerStyle",
                    // theadClasses: 'thead-dark',
                    columns: [
                    [{
                       field:'my_playlist',
                       title:'My playlist',
                       colspan: 3
                    }],
                    [{
                      field: 'artist_name',
                      title: 'Artist',
                      class: "thead-dark"
                    }, {
                      field: 'name',
                      title: 'Song Name'
                    }, {
                      field: 'id',
                      title: 'Link',
                      align: 'center',
                      formatter : function(value,row,index) {
                        return '<button class=\'btn player btn-outline-light \' class="player" id="'+value+'"  >Click to play song!</button> ';
                      }
                    }]
                  ]
                });
                $("#songs").show("slow", "swing");
                $(".player").click(function(){
                    let row_index = $(this).closest('td').parent()[0].sectionRowIndex;
                    let video_id= myData[row_index].id;
                    if ($(`#${video_id}`).tagName == "IFRAME") {    // used template literals
                        player.playVideo();
                      } else {
                        createVideo(video_id, row_index);
                      }
                });
            },
            error:function(jqXhr, textStatus, errorMessage){
                console.log(errorMessage);
                alert("Error. please refresh page and retry");
            }
        });
    });
});




 function createVideo(videoId, row_index) {
        var youtubeScriptId = "youtube-api";
        var youtubeScript = document.getElementById(youtubeScriptId);
        const f = function() {
              new window.YT.Player($(".player").get(row_index), { //`${}`
                videoId: videoId,
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0
                }
              });
        };
        if (youtubeScript === null) {
          var tag = document.createElement("script");
          var firstScript = document.getElementsByTagName("script")[0];
          tag.src = "https://www.youtube.com/iframe_api";
          tag.id = youtubeScriptId;
          firstScript.parentNode.insertBefore(tag, firstScript);
          window.onYouTubeIframeAPIReady = f;
        } else {
            f();
        }
}
      
function rowStyle(row, index) {
    return {
      css: {color: 'white'}
    };
 }
 function headerStyle(column) {
    return {
      artist_name: {
        css:{color: 'white', 'text-transform': 'uppercase'}
      },
      name: {
        css:{color: 'white', 'text-transform': 'uppercase'}
      },
      id: {
        css:{color: 'white', 'text-transform': 'uppercase'}
      },
      my_playlist:{
        css:{color: 'white'}
      }
    }[column.field];
  }