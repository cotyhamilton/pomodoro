$(document).ready(function() {
    var workMinutes = 25,
        saveWorkMinutes = workMinutes,
        workSeconds = 0,
        breakMinutes = 10,
        saveBreakMinutes = breakMinutes,
        breakSeconds = 0,
        timer = new Audio('timer.wav'),
        minute = new Audio('minute.wav'),
        handle = setInterval(countDownWork, 1000);
    
    function countDownWork() {
        if (workMinutes == 0 && workSeconds == 1) {
            clearInterval(handle);
            if (breakMinutes > 0) {
                handle = setInterval(countDownBreak, 1000);
            }
            workSeconds--;
            workMinutes = saveWorkMinutes;
            $('.work-minutes').text(workMinutes);
            $('.work-seconds').text("0" + workSeconds);
            timer.play();
            return;
        }
        else if (workSeconds == 0) {
            workMinutes--;
            if (workMinutes != saveWorkMinutes - 1) {
                minute.play();
            }
            workSeconds = 60;
        }
        workSeconds--;
        $('.work-minutes').text(workMinutes);
        if (workSeconds < 10) {
            $('.work-seconds').text("0" + workSeconds)
        }
        else {
            $('.work-seconds').text(workSeconds); 
        }
    }
    
    function countDownBreak() {
        if (breakMinutes == 0 && breakSeconds == 1) {
            clearInterval(handle);
            if (workMinutes > 0) {
                handle = setInterval(countDownWork, 1000);
            }
            breakSeconds--;
            breakMinutes = saveBreakMinutes;
            $('.break-minutes').text(breakMinutes);
            $('.break-seconds').text("0" + workSeconds);
            timer.play();
            return;
        }
        else if (breakSeconds == 0) {
            breakMinutes--;
            if (breakMinutes != saveBreakMinutes - 1) {
                minute.play();
            }
            breakSeconds = 60;
        }
        breakSeconds--;
        $('.break-minutes').text(breakMinutes);
        if (breakSeconds < 10) {
            $('.break-seconds').text("0" + breakSeconds)
        }
        else {
            $('.break-seconds').text(breakSeconds); 
        }
    }
    
    $('.work-minutes').text(workMinutes);
    $('.work-seconds').text("0" + workSeconds);
    $('.break-minutes').text(breakMinutes);
    $('.break-seconds').text("0" + breakSeconds);
    
    $('.reset').on('click', function() {
        clearInterval(handle);
        workMinutes = 0;
        workSeconds = 0;
        breakMinutes = 0;
        breakSeconds = 0;
        $('.work-minutes').text(workMinutes);
        $('.work-seconds').text("0" + workSeconds);
        $('.break-minutes').text(breakMinutes);
        $('.break-seconds').text("0" + breakSeconds);
    });
    
    $('.start').on('click', function() {
        if (workMinutes > 0) {
            clearInterval(handle);
            handle = setInterval(countDownWork, 1000);
        }
    });
    
    $('.work-plus').on('click', function() {
        workMinutes++;
        $('.work-minutes').text(workMinutes);
        saveWorkMinutes = workMinutes;
    })
    
    $('.work-minus').on('click', function() {
        if (workMinutes > 0) {
            workMinutes--;
            $('.work-minutes').text(workMinutes);
            saveWorkMinutes = workMinutes;
        }
    })
    
    $('.break-plus').on('click', function() {
        breakMinutes++;
        $('.break-minutes').text(breakMinutes);
        saveBreakMinutes = breakMinutes;
    })
    
    $('.break-minus').on('click', function() {
        if (breakMinutes > 0) {
            breakMinutes--;
            $('.break-minutes').text(breakMinutes);
            saveBreakMinutes = breakMinutes;
        }
    })
});