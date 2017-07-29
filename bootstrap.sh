#!/usr/bin/env bash

echo "=========================================="
echo "Provision VM START"
echo "=========================================="

sudo apt-get update

###############################################
# install prerequisits
###############################################
sudo apt-get -y -q upgrade
sudo apt-get -y -q update
sudo apt-get -y -q install software-properties-common htop
sudo apt-get -y -q install build-essential
sudo apt-get -y -q install tcl8.5

###############################################
# Install Git
###############################################
sudo apt-get -y -q install git
###############################################
# install latest nvm
###############################################
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
source ~/.nvm/nvm.sh
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
###############################################
# install latest stable node.js
###############################################
echo "Installing node.js... (please be patient)"
nvm install stable &> /dev/null
nvm alias default stable
###############################################
# install node packages
###############################################
cd /vagrant/
echo "Installing local node.js packages... (please be patient)"
npm install
###############################################
# Install docker
###############################################
sudo apt-get -y -q install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get -y -q update
sudo apt-get -y -q install docker-ce
###############################################
# Install docker-compose
###############################################
curl -L https://github.com/docker/compose/releases/download/1.12.0-rc1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "Install summary:"
docker --version
docker-compose version
echo "=========================================="
echo "Provision VM finished"
echo "=========================================="