export default () => ({
    tinymce: {
        enabled:true,
        config: {
            editor: {
                outputFormat: "html",
                tinymceSrc: "/tinymce/tinymce.min.js", // USE WITH YOUR PUBLIC PATH TO TINYMCE LIBRARY FOR USING SELF HOSTED TINYMCE
                editorConfig: {
                    height: 500,
                    menubar: true,
                    extended_valid_elements: "span, img, small",
                    forced_root_block: "",
                    convert_urls: false,
                    entity_encoding: "raw",
                    plugins:
                        "autolink lists link image anchor \
                        searchreplace visualblocks fullscreen nonbreaking \
                        media wordcount",
                    toolbar:
                        "undo redo | styles | bold italic | table visualblocks | nonbreaking bullist numlist | removeformat",
                    style_formats: [
                        {
                            title: "Headings",
                            items: [
                                { title: "h1", block: "h1" },
                                { title: "h2", block: "h2" },
                                { title: "h3", block: "h3" },
                                { title: "h4", block: "h4" },
                                { title: "h5", block: "h5" },
                                { title: "h6", block: "h6" },
                            ],
                        },
                        {
                            title: "Text",
                            items: [
                                { title: "Paragraph", block: "p" },
                                {
                                    title: "Paragraph with small letters",
                                    block: "small",
                                },
                            ],
                        },
                    ],
                },
            },
        },
    }
});
