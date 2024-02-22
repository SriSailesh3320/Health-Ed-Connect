function showTopic(topic) {
    let url;
    switch(topic) {
        case 1:
            url = "topic1.html"; // URL for topic 1 content
            break;
        case 2:
            url = "topic2.html"; // URL for topic 2 content
            break;
        case 3:
            url = "topic3.html"; // URL for topic 3 content
            break;
        default:
            url = "#";
            break;
    }
    window.open(url, "_blank");
}
