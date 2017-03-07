$(document).ready(function(){
    $("input").blur(function() {
        var chars = $(this).val().length;
        console.log(chars);
        if(chars<=5){
            $(this).parent().addClass("has-error");

        }else{
            $(this).parent().removeClass("has-error").addClass("has-success")
        }
    });
    $(".password2").blur(function(){
        if($(".password1").val()===$(".password2").val()){
            $(".password1",".password2").parent().removeClass("has-error").addClass("has-success");
        }else{
            $(".password1",".password2").parent().removeClass("has-success").addClass("has-error");
        }
    })


    // $("#submit").click(function(){
    //     if($(":input").parents().hasClass("has-success")){
    //         alert("ok");
    //     }else{
    //         alert("Veuillez remplir correctement le fomulaire");
    //         return false;
    //     }
    // })

})
