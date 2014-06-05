var expect = chai.expect;

describe('ROS.pubsub', function() {
  describe('chatter', function() {

    it('should subscribe, send and receive messages', function(done) {
      this.timeout(5000);

      var gotMessage = false;
      var ros = new ROSLIB.Ros();
      // If there is an error on the backend, an 'error' emit will be emitted.
      ros.on('error', function(error) {
        console.log(error);
      });

      var chatter = new ROSLIB.Topic({
          ros : ros,
          name : '/chatter',
          messageType : 'std_msgs/String'
        });

      var hi = new ROSLIB.Message( {data: 'hi!'} );

      var chatterListener = new ROSLIB.Topic({
        ros : ros,
        name : '/chatter',
        messageType : 'std_msgs/String'
      });

      // Then we add a callback to be called every time a message is published on this topic.
      chatterListener.subscribe(function(message) {
        console.log('Received message on ' + chatterListener.name + ': ' + message.data);

        gotMessage = message.data;

        // If desired, we can unsubscribe from the topic as well.
        chatterListener.unsubscribe();

        expect(gotMessage).to.equal('hi!');

        // This is the only way this test completes.
        done();
      });

      // Find out exactly when we made a connection.
      ros.on('connection', function() {
        console.log('Connection made!');
        chatter.publish(hi);
      });

      ros.connect('ws://localhost:9090');
    });
  });

});
