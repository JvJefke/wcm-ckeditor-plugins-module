angular.module('ckeditor-plugins_0.0.50')
    .directive('imageSlider', [
        'CKEditorConfig',

        function(CKEditorConfig) {
            return {
                templateUrl: CKEditorConfig.modulePath +'/directives/image-slider.html',
                replace: true,
                restrict: 'E',
                scope: {
                    images: '='
                },
                link: function($scope, $el, attr) {
                    $scope.assetsPath = CKEditorConfig.assetsPath;

                    $scope.addImage = function addImage() {
                        $scope.images.push({ src: '' });
                    };

                    $scope.removeImage = function removeImage(index) {
                        $scope.images.splice(index, 1);
                    };

                    $scope.moveImage = function moveImage(index, factor) {
                        $scope.images.splice(index + factor, 0, $scope.images.splice(index, 1)[0]);
                    };
                }
            };
        }
    ]);