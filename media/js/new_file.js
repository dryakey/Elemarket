$(function() {
    Dropzone.options.myAwesomeDropzone = {
        maxFilesize: 500000,
		headers: { "aaaaaaaaaaa": "header value" },
        addRemoveLinks: true,
		autoProcessQueue:false,
		parallelUploads: 10,
        dictResponseError: 'Server not Configured',
        acceptedFiles: ".xlsx,.xls,",
        init: function() {
            var self = this;
            // config
            self.options.addRemoveLinks = true;
            self.options.dictRemoveFile = "Delete";
            //New file added
            self.on("addedfile", function(file) {
                console.log('new file added ', file);
            });
            // Send file starts
            self.on("sending", function(file) {
                console.log('upload started', file);
                $('.meter').show();
            });

            // File upload Progress
            self.on("totaluploadprogress", function(progress) {
                console.log("progress ", progress);
                $('.roller').width(progress + '%');
            });

            self.on("queuecomplete", function(progress) {
                $('.meter').delay(999).slideUp(999);
            });

            // On removing file
            self.on("removedfile", function(file) {
                console.log(file);
            });
        }
    };
})