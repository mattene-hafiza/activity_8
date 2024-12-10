document.getElementById("new-button").onclick = function() {
    document.getElementById("modal").style.display = "block";
};

document.getElementById("cancel-button").onclick = function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("post-content").value = "";
};

document.getElementById("save-button").onclick = function() {
    const content = document.getElementById("post-content").value;
    if (content) {
        const post = document.createElement("div");
        post.textContent = content;
        document.getElementById("display-content").appendChild(post);
        document.getElementById("modal").style.display = "none";
    }
};
