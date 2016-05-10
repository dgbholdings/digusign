'use strict';

angular.module('diguSignApp')
  .controller('SignCtrl', function ($scope, $http, $location, socket, fileUploadService, apiService) {

    $scope.fileInputContent = "";

    $scope.docTypes = [
      { name: "None", code: null },
      { name: "Purchase Order  (POR)", code: "POR" }, 
      { name: "CMR Document (CMR)", code: "CMR" },
      { name: "Commercial Invoice (CIV)", code: "CIV" },
      { name: "Airway Bill (AWB)", code: "AWB" },
      { name: "Packing List (PLT)", code: "PLT" },
      { name: "Bill of Lading (BOL)", code: "BOL" },
      { name: "Letter of Credit (LOC)", code: "LOC" },
      { name: "Multimodal Bill of Lading (FBL)", code: "FBL" },
      { name: "Certificate of Origin (COO)", code: "COO" },
      { name: "Inspection Certificate (ICT)", code: "ICT" },
      { name: "Insurance Document (IDC)", code: "IDC" },
      { name: "Tax Document (TDC)", code: "TDC" },
      { name: "Real Estate Document (RDC)", code: "RDC" },
      { name: "Estate Document (EDC)", code: "EDC" },
      { name: "Bank Account Document (BDC)", code: "BDC" },
      { name: "Identification Document (IDT)", code: "IDT" },
      { name: "Contract Document (CDC)", code: "CDC" },
      { name: "Legal Document (LGD)", code: "LGD" },
      { name: "Non Disclosure Agreement (NDA)", code: "NDA" },
      { name: "Employment Agreement (EAT)", code: "EAT" },
      { name: "Memorandum of Understanding (MOU)", code: "MOU" },
      { name: "Terms of Use (TOU)", code: "TOU" },
      { name: "Privacy Policy (PPY)", code: "PPY" },
      { name: "Business Plan (BPL)", code: "BPL" },
      { name: "Operating Agreement (OAT)", code: "OAT" }
    ]

    $scope.selectedType = $scope.docTypes[0];

    $scope.onFileUpload = function (element) {
      $scope.$apply(function (scope) {
        var file = element.files[0];
        $scope.file = file.name
        fileUploadService.readFileAsync(file).then(function (fileInputContent) {
          $scope.hash = fileInputContent;
        });
      });
    };

    $scope.submit = function(){
      let obj = {
        hash: $scope.hash,
        type: $scope.selectedType.code,
      }
      apiService.createDoc(obj).then(function(txid){
        $location.path('/document/' + $scope.hash)
      }).catch(function(err){
        console.log(err)
      })
    };

    $scope.fileClick = function(){
      setTimeout(function() {$('#file').click();},   );
    }


  });