$('.resume_main_education').click(function(){
    $('.resume_main_education').addClass('active')
    $('.resume_main_professional').removeClass('active')
    $('.resume_main_experience').removeClass('active')
    $('.resume_main_interview').removeClass('active')
    $(".professionalSkills").css("display","none");
    $(".education").css("display","flex");
    $(".experience").css("display","none");
    $(".interview").css("display","none");
})
$('.resume_main_professional').click(function(){
    $('.education_footer_left_cards_skill_figma').css("width",'0%'),
     $('.education_footer_left_cards_skill_photoshop').css("width",'0%'),
    $('.education_footer_left_cards_skill_adobeills').css("width",'0%'),
    $('.education_footer_left_cards_skill_adobexd').css("width",'0%'),
    $('.education_footer_left_cards_skill_design').css("width",'0%'),
    $('.education_footer_right_cards_skill_html').css("width",'0%'),
    $('.education_footer_right_cards_skill_css').css("width",'0%'),
    $('.education_footer_right_cards_skill_javascript').css("width",'0%'),
    $('.education_footer_right_cards_skill_software').css("width",'0%'),
    $('.education_footer_right_cards_skill_plugin').css("width",'0%')
    setTimeout(() => {
        $('.education_footer_left_cards_skill_figma').css("width",'95%'),
         $('.education_footer_left_cards_skill_photoshop').css("width",'100%'),
        $('.education_footer_left_cards_skill_adobeills').css("width",'70%'),
        $('.education_footer_left_cards_skill_adobexd').css("width",'60%'),
        $('.education_footer_left_cards_skill_design').css("width",'90%'),
        $('.education_footer_right_cards_skill_html').css("width",'100%'),
        $('.education_footer_right_cards_skill_css').css("width",'95%'),
        $('.education_footer_right_cards_skill_javascript').css("width",'70%'),
        $('.education_footer_right_cards_skill_software').css("width",'60%'),
        $('.education_footer_right_cards_skill_plugin').css("width",'90%')
    }, 500);
    $('.resume_main_professional').addClass('active')
    $('.resume_main_education').removeClass('active')
    $('.resume_main_experience').removeClass('active')
    $('.resume_main_interview').removeClass('active')
    $(".professionalSkills").css("display","flex");
    $(".education").css("display","none");
    $(".experience").css("display","none");
    $(".interview").css("display","none");
})

$('.resume_main_experience').click(function(){
    $('.resume_main_experience').addClass('active')
    $('.resume_main_professional').removeClass('active')
    $('.resume_main_education').removeClass('active')
    $('.resume_main_interview').removeClass('active')
    $(".professionalSkills").css("display","none");
    $(".education").css("display","none");
    $(".experience").css("display","flex");
    $(".interview").css("display","none");
})
$('.resume_main_interview').click(function(){
    $('.resume_main_interview').addClass('active')
    $('.resume_main_professional').removeClass('active')
    $('.resume_main_experience').removeClass('active')
    $('.resume_main_education').removeClass('active')
    $(".professionalSkills").css("display","none");
    $(".education").css("display","none");
    $(".experience").css("display","none");
    $(".interview").css("display","flex");
})



