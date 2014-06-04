Integration tests for roslibjs
========

# Loacal development

`roslibjs_integration_tests` depends on roslibjs. For now, they mush
share the same parent folder. The tests will just use non-minified
build of roslibjs (see Gruntfile).

# Running tests

Integration testing launches the ros master, rosbridge and a browser
to test end-to-end communication. Tested under ubuntu only with
chrome. It doesn't work with phantomjs, beacuse it's currently
incompatible with the latest websockets standard that rosbridge uses
(https://github.com/ariya/phantomjs/issues/11018).

 1. Install xvfb and chrome. Adapted from http://www.chrisle.me/2013/08/running-headless-selenium-with-chrome/

```
  # Add Google public key to apt
    wget -q -O - "https://dl-ssl.google.com/linux/linux_signing_key.pub" | sudo apt-key add -

  # Add Google to the apt-get source list
    echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list

  # Update app-get
    apt-get update

  # Install Chrome and Xvfb
    apt-get -y install google-chrome-stable xvfb

```

 1. Launch xvfb

```
export DISPLAY=:99
Xvfb :99 -screen 0 1366x768x24 -ac &
```

 1. Run tests

```
export DISPLAY=:99
rostest roslibjs_integration_tests test_pubsub.test
```

The tests will report success/failure, but the meaningful output will
go to `/tmp/integration_test_log` (see `bin/js_runner` for
details). I cut some corners to have it run with rostest.
