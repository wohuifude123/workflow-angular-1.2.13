/*
 * Controller for morph shape selection
 */

// var userTaskCtrl = ['$rootScope', '$scope', '$timeout', '$translate', '$modal', function () {
//   // 表单设置表单类型
// }]

angular.module('workflowModeler')
    .controller('userTaskCtrl', function ($rootScope, $scope, $timeout) {
      // Close
      $scope.close = function() {
        console.log('关闭')
        // $scope.$hide();
      };
      $scope.users = ['张三'];

      $scope.data = {
        notityMode: '正确模式'
      }

      $scope.NotifyfType = [
        {
          value: "value1",
          text: "文本1"
        },
        {
          value: "value2",
          text: "文本2"
        }
      ]

      // 连线tab切换
      $scope.flowActive = 1
      $scope.acti = 1



      $scope.UserTaskRejectNodeType = [
        {
          value: "value1",
          text: "文本1"
        },
        {
          value: "value2",
          text: "文本2"
        }
      ]

      console.log('text == ', $scope.UserTaskRejectNodeType[0].text)

      $scope.userTaskValue = {
        type: $scope.UserTaskRejectNodeType[0].value
      }


      // 用户任务
      $scope.ischangeID = false

      $scope.actived1 = function (num) {
        console.log('actived1 == ', num)
        $scope.acti = num
        // if (num == 3) {
        //   $scope.addusr(1)
        //
      }

      /**
       *
       * @param {基本设置}
       */
      $scope.setcheck = function () {
        console.log('变量设置')
        // $modal({
        //   template: 'editor-app/popups/changeSet.html?version=' + Date.now(),
        //   scope:$scope
        // });
      }

      $scope.getRejectType = function () {
      }

      $scope.selectBackPoint = function () {
        console.info('selectBackPoint == ', $scope.userTaskValue.type);
      }


    })
