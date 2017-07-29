# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
require 'etc'
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
   config.vm.box = "phusion-open-ubuntu-14.04-amd64"
   config.vm.network :private_network, ip: "192.168.99.106"
   config.vm.hostname = "dev.coo-e.com"
   config.vm.network "forwarded_port", guest: 9999, host: 9999
   config.vm.network "forwarded_port", guest:80, host:80
   config.vm.network "forwarded_port", guest:8080, host:8081
   config.vm.network "forwarded_port", guest:6379, host:6379
   config.vm.network "forwarded_port", guest:5858, host:5858

   config.vm.box_url = "https://oss-binaries.phusionpassenger.com/vagrant/boxes/latest/ubuntu-14.04-amd64-vbox.box"

   config.vm.provider "virtualbox" do |v,override|
     override.vm.box_url = "https://oss-binaries.phusionpassenger.com/vagrant/boxes/latest/ubuntu-14.04-amd64-vbox.box"
       # max 66% CPU cap
     v.customize ["modifyvm", :id, "--cpuexecutioncap", "66"]
     # give vm max 3GB ram
     v.memory = 8200
     v.cpus = 2
   end

   # Only run the provisioning on the first 'vagrant up'
   if Dir.glob("#{File.dirname(__FILE__)}/.vagrant/machines/default/*/id").empty?
     # Install Docker
     pkg_cmd = "wget -q -O - https://get.docker.io/gpg | apt-key add -;" \
       "echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list;" \
       "apt-get update -qq; apt-get install -q -y --force-yes lxc-docker; "\
     # Add vagrant user to the docker group
     pkg_cmd << "usermod -a -G docker vagrant; "
     config.vm.provision :shell, :inline => pkg_cmd
     config.vm.provision :shell, path: "bootstrap.sh"
   end
 end